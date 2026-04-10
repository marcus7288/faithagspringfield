# Customization Guide

This guide covers everything you can change to brand this template for a new church — without touching any JavaScript.

---

## Colors

All colors are defined as CSS variables in the `<style>` block near the top of `index.html`. Find the `:root` section:

```css
:root {
    --navy:        #1A3A52;   /* Primary dark color — nav, hero, buttons */
    --navy-dark:   #122840;   /* Darker navy — footer, announcement bar */
    --navy-light:  #2C4A65;   /* Lighter navy — gradients, hover states */
    --sage:        #69B76E;   /* Accent green — section labels, icons, card borders */
    --sage-dark:   #4E9A54;   /* Darker green — hover states */
    --gold:        #C8A96E;   /* Gold — Give button, hero divider, nav Give pill */
    --gold-light:  #E5D4A6;   /* Light gold — tagline text, footer icons */
    --cream:       #FAF7F2;   /* Page background */
    --cream-dark:  #F0EAE0;   /* Alternating section background */
    --text-dark:   #1A2332;   /* Primary text */
    --text-mid:    #3D5166;   /* Secondary text */
    --text-light:  #6B8090;   /* Muted/hint text */
    --border:      #D8CFC4;   /* Input borders, dividers */
}
```

### Color Scheme Examples

| Style | --navy | --sage | --gold |
|---|---|---|---|
| Default (Navy & Sage) | `#1A3A52` | `#69B76E` | `#C8A96E` |
| Burgundy & Cream | `#5C1F2E` | `#C8A96E` | `#D4A853` |
| Forest Green | `#1B3A2D` | `#4E9A54` | `#C8A96E` |
| Slate & Gold | `#2C3E50` | `#F39C12` | `#F1C40F` |
| Royal Purple | `#2E1A5E` | `#8E44AD` | `#D4AC0D` |

---

## Fonts

Three Google Fonts are loaded in the `<head>`:

| Font | Used For | Variable |
|---|---|---|
| **Cormorant Garamond** | Headings, hero title, section titles, card names | `font-family: 'Cormorant Garamond', serif` |
| **Inter** | Body text, paragraphs, labels | `font-family: 'Inter', sans-serif` |
| **Outfit** | UI elements, nav, card headers, admin panel | `font-family: 'Outfit', sans-serif` |

To change fonts, update the Google Fonts `<link>` in the `<head>` and replace font-family references in `:root` or throughout the CSS.

**Popular church font pairings:**
- Playfair Display + Lato
- Libre Baskerville + Source Sans Pro
- Merriweather + Open Sans

---

## Sections

Each section can be independently shown, hidden, or reordered.

| Section ID | Class | Can Hide? | How |
|---|---|---|---|
| `#home` | `.hero` | No (required) | — |
| `#about` | — | Yes | Add `style="display:none"` |
| `#services` | `.alt-bg` | Yes | Add `style="display:none"` |
| `#plan-visit` | — | Yes | Add `style="display:none"` |
| `#ministries` | `.alt-bg` | Yes | Add `style="display:none"` |
| `#events` | — | Yes | Add `style="display:none"` |
| `#sermons` | `.navy-bg` | Yes | Add `style="display:none"` |
| `#give` | `.give-section-banner` | Yes | Add `style="display:none"` |
| `#contact` | `.alt-bg` | Yes | Add `style="display:none"` |

To reorder sections, cut and paste the `<section>` blocks in `index.html`. Also update the nav links to match.

---

## Logo

Replace `logo 2.png` in the repo with your church's logo. Keep the same filename, or:
1. Upload your file with a new name
2. In `index.html`, find all `src="logo 2.png"` references (there are 3 — nav, hero, footer) and update them
3. Do the same in `admin.html` (1 reference — login screen and header)

Recommended: PNG with transparent background, at least 200px tall.

---

## Hero Background Photo

Upload a file named `hero-bg.jpg` to the repo root. The hero section will display it automatically with a dark overlay.

- Recommended size: 1920×1080px minimum
- Landscape orientation works best
- Dark or mid-tone photos work better (the overlay darkens light photos anyway)
- Good subjects: church exterior, congregation worship, baptism, community events

To adjust the overlay darkness, find `.hero-bg-overlay` in the CSS and change the `rgba` opacity values (default is 0.55–0.65).

---

## Ministry Cards

The six ministry cards in the Ministries section can be freely edited in `index.html`. Each card follows this pattern:

```html
<div class="ministry-card fade-in">
    <div class="ministry-card-icon"><i class="fa-solid fa-ICON-NAME"></i></div>
    <h3>Ministry Name</h3>
    <p>Short description of this ministry.</p>
</div>
```

Icon names come from [Font Awesome 6](https://fontawesome.com/icons). Common church icons:
`fa-church`, `fa-cross`, `fa-dove`, `fa-bible`, `fa-pray`, `fa-hands-praying`,
`fa-children`, `fa-fire`, `fa-music`, `fa-user-group`, `fa-globe`, `fa-heart`

---

## Navigation Links

The nav links are in two places in `index.html`:

1. Desktop nav — `<ul class="nav-links">`
2. Mobile menu — `<div class="mobile-menu">`

Keep both in sync. Each link uses a `#section-id` anchor to scroll to that section.

---

## Contact Form

The contact form currently uses a simple `onclick="alert(...)"` handler — it doesn't actually send email. To make it functional:

- **Formspree** (free): Add `action="https://formspree.io/f/YOUR_ID"` and `method="POST"` to the `<form>` tag
- **Netlify Forms**: Add `netlify` attribute to the form tag — Netlify handles submissions automatically
- **EmailJS**: Add the EmailJS SDK and update the submit handler

---

## Adding Pages

This is a single-page site. To add additional pages (e.g., a full sermons archive, a staff page, or a kids ministry page):

1. Create a new `.html` file in the repo (e.g., `sermons.html`)
2. Copy the `<head>`, nav, and footer from `index.html`
3. Add your new content in the `<main>` area
4. Link to it from the nav

---

## Favicon

Add a `favicon.ico` or `favicon.png` to the repo root, then add to `<head>` in `index.html`:

```html
<link rel="icon" type="image/png" href="favicon.png">
```

---

*See [README.md](./README.md) for setup instructions and admin panel documentation.*
