# Ronalix AI Website

This is the official repository for the Ronalix AI website, built with Next.js, Tailwind CSS, and TypeScript.
It is designed to be fully static and deployable to GitHub Pages.

## Features
- **Modern Design:** Cyberpunk/futuristic aesthetic with neon green accents on a dark background.
- **Fast & Responsive:** Fully responsive across all devices and optimized for performance.
- **Static Export:** Ready to be deployed to GitHub Pages without a Node.js server.
- **Future-Proof Architecture:** Clean codebase designed to easily integrate with an upcoming AI backend (APIs, Authentication, Model Inference).

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is configured to automatically deploy to GitHub Pages whenever you push to the `main` branch. 

Make sure you have enabled GitHub Pages in your repository settings:
1. Go to your repository **Settings**.
2. Navigate to **Pages** in the left sidebar.
3. Under **Build and deployment**, select **GitHub Actions** as the source.

The included `.github/workflows/nextjs.yml` will handle the rest!
