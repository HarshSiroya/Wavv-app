# Wavv App

> Invite-only social events and curated real-life connections — demo Next.js app.

This repository contains the Wavv frontend built with Next.js and Tailwind CSS. The app uses curated Unsplash images for events and profiles (managed centrally in `lib/image-assets.ts`).

## Features
- Landing page with network visualization and hero video/background
- Events, Dashboard, Profile, Connections pages with professional images
- Centralized image asset config (`lib/image-assets.ts`) and sample data
- Enhanced event card UI and responsive layouts

## Local Development

Requirements:
- Node 18+ (or compatible)
- npm or pnpm

Install dependencies:

```bash
cd wavv-app
npm install --legacy-peer-deps
```

Run development server:

```bash
npm run dev
# then open http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

## Images
Images are stored as external URLs in `lib/image-assets.ts`. To replace images, update the URLs there and the pages/components will pick them up automatically.

