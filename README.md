# Modern Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, featuring smooth animations and a sleek UI.

## ✨ Features

- 🎨 Modern and clean design with glassmorphism effects
- 🌓 Dark/Light mode with smooth transitions
- ⚡ Fast and responsive
- 🎭 Advanced animations with Framer Motion
  - Text reveal animations
  - Scroll-triggered animations
  - Interactive hover effects
  - Smooth page transitions
- ✨ Interactive particle effects
- 📱 Mobile-friendly design
- 🎯 SEO optimized
- 🛠 Built with TypeScript
- 💻 Interactive 3D terminal component
- 📊 Real-time analytics with Discord webhooks
- 📝 Contact form with Discord integration
- 🎨 Glassmorphism UI components
- 📈 Animated skill progress bars
- 🔄 Smooth scroll reveal effects

## 🛠 Tech Stack

- React 18
- TypeScript 5
- Tailwind CSS
- Framer Motion
- React Router 6
- TSParticles
- Lucide Icons
- Vite

## 🚀 Getting Started

1. Clone the repository
```bash
git clone https://github.com/unt1tler/Portfolio-v1.git
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
Create a `.env` file with the following variables:
```env
VITE_DISCORD_WEBHOOK_URL=your_contact_form_webhook_url
VITE_DISCORD_PAGEVIEW_WEBHOOK_URL=your_pageview_webhook_url
VITE_DISCORD_ERROR_WEBHOOK_URL=your_error_webhook_url
```

4. Start the development server
```bash
npm run dev
```

5. Build for production
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── animations/      # Animation components
│   ├── sections/        # Page sections
│   ├── ui/             # Reusable UI components
│   └── terminal/       # Terminal-related components
├── config/             # Site configuration
├── context/           # React context providers
├── hooks/             # Custom React hooks
├── pages/             # Route pages
├── types/             # TypeScript types
└── utils/             # Utility functions
```

## 🎨 Customization

### Theme Colors

Update the theme colors in `src/config/site.ts`:

```typescript
theme: {
  colors: {
    light: {
      primary: "#5865F2",
      secondary: "#57F287",
      background: "#FFFFFF",
      surface: "#F8F9FA",
      text: "#2E3338",
      muted: "#747F8D"
    },
    dark: {
      primary: "#7289DA",
      secondary: "#57F287",
      background: "#1A1B26",
      surface: "#24283B",
      text: "#A9B1D6",
      muted: "#565F89"
    }
  }
}
```

### Content

Update your personal information and content in `src/config/site.ts`:

```typescript
{
  name: "Your Name",
  role: "Your Role",
  bio: "Your short bio",
  // ... other configurations
}
```

## 📊 Analytics Features

The website includes Discord webhook integration for:

- **Real-time Analytics**
  - Page view tracking
  - New visitor detection
  - Error monitoring
- **Daily Reports**
  - Visitor statistics
  - Page view metrics
  - User engagement data
- **Contact Form**
  - Form submission notifications
  - Automated responses

## 📄 License

MIT License - feel free to use this template for your own portfolio!
