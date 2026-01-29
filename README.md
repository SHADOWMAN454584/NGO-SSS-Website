# Selfless Serving Society (SSS) - Official Website

A modern, responsive website for Selfless Serving Society NGO, showcasing our mission, projects, and impact in empowering communities through education, livelihood training, and sustainable development.

## 🌟 Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Interactive Hero Section**: Dynamic image slider with smooth transitions
- **Case Studies**: Detailed showcase of our impactful projects with photo galleries
- **Contact Form**: Easy way for supporters to get in touch
- **SEO Optimized**: Proper meta tags and social media sharing support
- **Fast Performance**: Optimized images and code splitting

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/not-manmit/sss-ngo-website-react.git

# Navigate to project directory
cd sss-ngo-website-react

# Install dependencies
npm install

# Start development server
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## 📦 Production Build

```bash
# Create optimized production build
npm run build

# The build folder will contain optimized files ready for deployment
```

## 🌐 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `build`

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"homepage": "https://not-manmit.github.io/sss-ngo-website-react",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

## 📁 Project Structure

```
sss-ngo-website-react/
├── public/              # Static files
│   ├── index.html       # HTML template
│   ├── manifest.json    # PWA manifest
│   └── robots.txt       # SEO robots file
├── src/
│   ├── assets/          # Images and media files
│   ├── components/      # Reusable components
│   │   ├── Navbar.js    # Navigation component
│   │   └── Footer.js    # Footer component
│   ├── pages/           # Page components
│   │   ├── Home.js      # Homepage
│   │   ├── About.js     # About page
│   │   ├── WhatWeDo.js  # Services page
│   │   ├── CaseStudies.js # Case studies page
│   │   └── Contact.js   # Contact page
│   ├── App.js           # Main app component
│   └── index.js         # Entry point
├── .env.example         # Environment variables example
├── .env.production      # Production environment variables
└── package.json         # Dependencies and scripts
```

## 🛠️ Built With

- **React** (v19.1.1) - UI library
- **React Router DOM** (v7.9.3) - Routing
- **GSAP** (v3.13.0) - Animations
- **CSS3** - Styling with modern features

## 🎨 Customization

### Update Content
- Edit page components in `src/pages/`
- Update images in `src/assets/`
- Modify styles in corresponding `.css` files

### Update Colors
The main theme color is defined as `#FFD23F` (golden yellow). To change:
1. Search for `#FFD23F` and `#E8B10D` in CSS files
2. Update `theme_color` in `public/manifest.json`
3. Update meta `theme-color` in `public/index.html`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a private project for Selfless Serving Society. For contributions or suggestions, please contact the organization directly.

## 📄 License

© 2025 Selfless Serving Society. All rights reserved.

## 📞 Contact

For more information about Selfless Serving Society:
- Visit our website
- Email: contact@sss-ngo.org
- Follow us on social media

---

Built with ❤️ for creating positive social impact


### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
