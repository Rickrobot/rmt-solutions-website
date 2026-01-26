# RMT Solutions Website

Professional lift planning services website built with Next.js 14 and Tailwind CSS.

## Features

- ⚡ Next.js 14 with App Router
- 🎨 Tailwind CSS styling
- 📱 Fully responsive design
- 🔍 SEO optimized with meta tags, schema markup, and sitemap
- 🚀 Static export for easy deployment

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended) or any static host

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/rmt-solutions-website.git

# Navigate to directory
cd rmt-solutions-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create production build
npm run build

# The static export will be in the 'out' directory
```

## Deployment

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy automatically

### Option 2: GitHub Pages

1. Build the project: `npm run build`
2. The `out` directory contains static files
3. Deploy to GitHub Pages or any static host

### Option 3: Other Static Hosts

The `out` directory after build can be deployed to:
- Netlify
- Cloudflare Pages
- AWS S3 + CloudFront
- Any static file host

## Project Structure

```
├── app/
│   ├── layout.js          # Root layout with SEO
│   ├── page.js            # Homepage
│   ├── globals.css        # Global styles
│   ├── sitemap.js         # Dynamic sitemap
│   ├── robots.js          # Robots.txt
│   ├── about/
│   ├── contact/
│   ├── case-studies/
│   ├── resources/
│   └── services/
│       ├── lift-plans/
│       ├── tower-crane/
│       └── steel-erection/
├── components/
│   ├── Header.js
│   ├── Footer.js
│   └── ui/
├── public/
│   └── images/
├── next.config.js
├── tailwind.config.js
└── package.json
```

## SEO

The site includes:
- Meta tags for all pages
- Open Graph tags for social sharing
- Twitter cards
- JSON-LD schema markup (LocalBusiness, Service, FAQ)
- Auto-generated sitemap.xml
- robots.txt

## Customization

### Update Contact Details

Edit the schema in `app/page.js` and contact info in `app/contact/page.js` and `components/Footer.js`.

### Add Google Analytics

Add your GA4 tracking code to `app/layout.js`.

### Update Domain

Search and replace `rmtsolutions.co.uk` with your actual domain.

## License

© 2026 RMT Solutions Ltd. All rights reserved.
