# Faith Assembly of God - Website

A beautiful, single-page website for Faith Assembly of God in Springfield, Missouri.

## Features

- **Responsive Design**: Looks great on all devices (desktop, tablet, mobile)
- **Elegant Aesthetics**: Warm, welcoming design with gold and deep blue color scheme
- **Smooth Animations**: Subtle scroll effects and hover animations
- **Service Times**: Clear display of worship service schedule
- **Ministries Overview**: Showcase of church programs and activities
- **Contact Information**: Easy-to-find location and contact details

## Deploying to Netlify

### Important: Logo File Included

A placeholder logo (`logo.svg`) is included. You should replace it with your church's actual logo before deploying.

- **Current file**: `logo.svg` (placeholder with cross design)
- **Recommended**: Replace with your church's logo (PNG, SVG, or JPG)
- **Recommended size**: 300x300px or larger (will scale automatically)
- **Tip**: PNG or SVG with transparent background works best

### Option 1: Drag and Drop (Easiest)

1. Download the `index.html` file
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop the `index.html` file
4. Your site will be live instantly with a Netlify URL!

### Option 2: Git Deployment

1. Create a new repository on GitHub
2. Add the `index.html` file to your repository
3. Go to [Netlify](https://app.netlify.com)
4. Click "Add new site" → "Import an existing project"
5. Connect to your GitHub repository
6. Deploy!

### Option 3: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Navigate to your project folder
cd your-project-folder

# Deploy
netlify deploy
```

## Customization Guide

### Replace the Logo

1. A placeholder logo (`logo.svg`) is included with a simple cross design
2. Replace it with your church's actual logo
3. Keep the same filename `logo.svg` OR update the references in the HTML
4. For best results, use a PNG or SVG with transparent background
5. Recommended dimensions: 300x300px or larger

If you want to use a different filename:
- Find lines with `src="logo.svg"` in the HTML (there are 2 instances)
- Replace with your image filename (e.g., `src="church-logo.png"`)

### Update Contact Information

Replace the placeholder contact details in the Contact Section:

- **Address**: Line 485 - Update to your actual church address
- **Phone**: Line 490 - Update to your church phone number
- **Email**: Line 495 - Update to your church email

### Add Google Maps

Replace the map placeholder (lines 669-673) with a Google Maps embed:

```html
<iframe 
    src="YOUR_GOOGLE_MAPS_EMBED_URL" 
    width="100%" 
    height="100%" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

### Update Service Times

Modify the service cards (starting at line 311) to reflect your actual service schedule.

### Add Social Media Links

Update the social links in the footer (lines 684-686) with your church's social media profiles.

### Customize Colors

The color scheme uses CSS variables defined at the top of the file (lines 13-19):

```css
--cream: #FAF7F2;
--warm-white: #FFFBF5;
--deep-blue: #1a3a52;
--gold: #C9A961;
```

Change these values to customize the entire color scheme.

### Add More Content

- Add additional ministry items in the Ministries section
- Expand the About section with your church's history
- Add upcoming events or announcements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Single HTML file (no external dependencies except Google Fonts)
- Optimized animations
- Fast loading times
- SEO-friendly structure

## License

This website template is created for Faith Assembly of God, Springfield, Missouri.

---

**Need help?** Contact your web developer or reach out to Netlify support for deployment assistance.
