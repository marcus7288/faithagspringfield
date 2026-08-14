exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  // Get GitHub token from environment variable
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'GitHub token not configured. Add GITHUB_TOKEN to Netlify environment variables.' })
    };
  }

  try {
    const { files, owner, repo, branch } = JSON.parse(event.body);

    if (!files || !owner || !repo) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields: files, owner, repo' })
      };
    }

    const results = [];
    const ghBranch = branch || 'main';

    // Validate owner/repo format to prevent injection
    const validNamePattern = /^[a-zA-Z0-9_.-]+$/;
    if (!validNamePattern.test(owner) || !validNamePattern.test(repo)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid owner or repo format' })
      };
    }

    // Allowed file paths - only permit specific JSON files
    const allowedPaths = ['events.json', 'announcements.json', 'sermons.json', 'config.json'];

    for (const file of files) {
      // Validate file path is in allowlist (prevents path traversal)
      if (!allowedPaths.includes(file.path)) {
        results.push({ path: file.path, success: false, error: 'File path not allowed' });
        continue;
      }
      // Get current file SHA (needed for updates)
      const shaRes = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/${file.path}?ref=${ghBranch}`,
        {
          headers: {
            'Authorization': `token ${token}`,
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'Netlify-Function'
          }
        }
      );

      const shaData = shaRes.ok ? await shaRes.json() : {};

      // Prepare payload
      const payload = {
        message: `Update ${file.path} via admin panel`,
        content: Buffer.from(file.content).toString('base64'),
        branch: ghBranch
      };

      if (shaData.sha) {
        payload.sha = shaData.sha;
      }

      // Push file to GitHub
      const putRes = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/${file.path}`,
        {
          method: 'PUT',
          headers: {
            'Authorization': `token ${token}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json',
            'User-Agent': 'Netlify-Function'
          },
          body: JSON.stringify(payload)
        }
      );

      if (putRes.ok) {
        results.push({ path: file.path, success: true });
      } else {
        const errData = await putRes.json();
        results.push({ path: file.path, success: false, error: errData.message });
      }
    }

    const allSuccess = results.every(r => r.success);

    return {
      statusCode: allSuccess ? 200 : 207,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: allSuccess,
        message: allSuccess
          ? `Successfully published ${results.length} files`
          : 'Some files failed to publish',
        results
      })
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
