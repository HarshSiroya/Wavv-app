# Wavv App

> Invite-only social events and curated real-life connections — demo Next.js app.

Wavv is a modern platform designed to help people discover exclusive social events and build meaningful real-world connections. It combines event curation with intelligent networking to create a premium social experience.

## 🎯 Project Vision

Wavv connects like-minded individuals through carefully curated, invite-only events. Unlike traditional social networks, Wavv focuses on fostering genuine in-person connections rather than virtual interactions.

## ✨ Features

- **Event Discovery**: Browse a curated collection of invite-only social events with rich details
- **Dashboard**: Personalized hub to manage RSVPs, upcoming events, and event history
- **User Profiles**: Create a professional profile to showcase interests and connect with others
- **Connections**: Discover and manage your network within the Wavv community
- **Network Visualization**: Interactive landing page displaying network dynamics and platform growth
- **Responsive Design**: Beautiful, mobile-friendly UI built with Tailwind CSS
- **Centralized Asset Management**: Easy image configuration through `lib/image-assets.ts`

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js (React)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Images**: Curated from Unsplash (centrally managed)
- **Node Version**: 18+

## 🚀 Local Development

### Prerequisites

- Node.js 18 or higher
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/HarshSiroya/Wavv-app.git
cd Wavv-app
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
# or
pnpm install --legacy-peer-deps
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
wavv-app/
├── lib/
│   └── image-assets.ts    # Centralized image configuration
├── pages/                  # Next.js pages (Events, Dashboard, Profile, Connections)
├── components/             # Reusable React components
├── public/                 # Static assets
└── README.md
```

## 🖼️ Image Management

All images are stored as external URLs in `lib/image-assets.ts`. This centralized approach makes it easy to:
- Update images globally across the app
- Manage image URLs consistently
- Switch between different image sets
- Add new event or profile images

To replace images, simply update the URLs in `lib/image-assets.ts` and the pages/components will pick up the changes automatically.

## 📄 Pages & Components

- **Landing Page**: Network visualization with hero content
- **Events Page**: Browse all available invite-only events
- **Dashboard**: Personal event management and overview
- **Profile Page**: User profile customization and display
- **Connections Page**: Manage and discover network connections

## 📝 License

This is a demo project. Check the repository for license information.

## 🤝 Contributing

This is a demo application. Feel free to fork and customize for your own use.

## 📞 Contact

For more information, visit the [Wavv App Repository](https://github.com/HarshSiroya/Wavv-app)
