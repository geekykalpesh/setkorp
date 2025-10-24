# Setkorp - Digital Solutions Platform

A modern Next.js application built with React, Tailwind CSS, and Framer Motion for smooth animations and professional UI components.

## 🚀 Features

- **Modern Stack**: Next.js 15, React 19, Tailwind CSS 4
- **UI Components**: shadcn/ui with Radix UI primitives
- **Animations**: Framer Motion for smooth interactions
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Proper meta tags and Open Graph support
- **Performance**: Optimized images and code splitting

## 📁 Project Structure

```
setkorp-1-main/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   └── page.js            # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── *.jsx             # Custom components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
│   └── assets/          # Images and media
├── .env.local           # Environment variables
├── components.json      # shadcn/ui config
├── jsconfig.json       # JavaScript config
├── next.config.mjs     # Next.js config
├── package.json        # Dependencies
├── postcss.config.mjs  # PostCSS config
└── tailwind.config.js  # Tailwind config
```

## 🛠️ Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run clean` - Clean build files

## 🎨 Styling

- **Tailwind CSS 4** for utility-first styling
- **CSS Variables** for theme customization
- **shadcn/ui** components for consistent design
- **Responsive design** with mobile-first approach

## 🔧 Configuration

### Environment Variables
Create `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=Setkorp
```

### Tailwind CSS
Configured with shadcn/ui theme and custom animations.

### Next.js
Optimized for performance with image optimization and package imports.

## 📦 Key Dependencies

- **Next.js 15** - React framework
- **React 19** - UI library
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **Radix UI** - Accessible components
- **Lucide React** - Icons

## 🚀 Deployment

The app is ready for deployment on Vercel, Netlify, or any Node.js hosting platform.

For Vercel deployment:
```bash
npm run build
```

## 📄 License

This project is private and proprietary.