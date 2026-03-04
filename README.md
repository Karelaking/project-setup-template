# 🚀 Project Setup Template

> A modern, production-ready Next.js template with Clerk authentication, Tailwind CSS, TypeScript, and best practices built-in. Perfect for jumpstarting your next project!

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Using as a Template](#-using-as-a-template)
- [Configuration](#-configuration)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- **🔐 Authentication Ready** - Pre-configured Clerk authentication with sign-in/sign-up pages
- **🎨 Beautiful UI** - Tailwind CSS with custom components and theme mode switching
- **📱 Responsive Design** - Mobile-first approach with Tailwind utilities
- **🔄 Theme Switching** - Dark/Light mode toggle with next-themes integration
- **⚡ Fast Performance** - Optimized with Next.js 16 Turbopack and ESLint
- **🛡️ Type Safe** - Full TypeScript support with strict mode enabled
- **🧩 Component Library** - Pre-built UI components (Button, etc.) ready to extend
- **📦 Modern Tooling** - pnpm, ESLint, PostCSS, and TypeScript out of the box
- **🎯 Best Practices** - Follows Next.js 16 App Router conventions
- **🚀 Production Ready** - Error handling, security middleware, and optimized builds

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| [Next.js 16](https://nextjs.org) | React framework with SSR & App Router |
| [TypeScript](https://www.typescriptlang.org) | Type-safe JavaScript |
| [Tailwind CSS 4](https://tailwindcss.com) | Utility-first CSS framework |
| [Clerk](https://clerk.com) | Modern authentication & user management |
| [next-themes](https://github.com/pacocoursey/next-themes) | Theme mode provider |
| [Radix UI](https://www.radix-ui.com) | Unstyled, accessible component primitives |
| [Lucide React](https://lucide.dev) | Beautiful icon library |
| [ESLint](https://eslint.org) | Code linting & formatting |

## 📁 Project Structure

```
project-setup-template/
├── app/                          # Next.js app directory
│   ├── (auth)/                   # Auth route group
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── layout.tsx                # Root layout with providers
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── clientComponent/          # Client-side components
│   │   ├── theme-mode-button.tsx # Dark/light mode toggle
│   │   ├── theme-provider.tsx    # Theme provider wrapper
│   │   └── index.ts
│   ├── serverComponent/          # Server-side components
│   │   ├── Provider.tsx          # Combined providers
│   │   └── index.ts
│   └── ui/                       # Reusable UI components
│       └── button.tsx            # Styled button component
├── lib/                          # Utility functions
│   └── utils.ts
├── public/                       # Static assets
├── .env                          # Environment variables template
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
├── eslint.config.mjs             # ESLint configuration
└── package.json                  # Dependencies & scripts
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ or **bun**
- **pnpm** 8+ (recommended) or npm/yarn/bun

### Installation

1. **Create from this template** (recommended):
   ```bash
   # Via GitHub CLI
   gh repo create my-project --template your-username/project-setup-template

   # Or download and clone
   git clone https://github.com/your-username/project-setup-template.git my-project
   cd my-project
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Set up environment variables**:
   ```bash
   cp .env .env.local
   ```
   Then edit `.env.local` with your Clerk keys and other config.

4. **Run development server**:
   ```bash
   pnpm dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Using as a Template

### Option 1: GitHub Template (Recommended)

1. Click the **"Use this template"** button on the GitHub repository page
2. Create a new repository with your project name
3. Clone your new repository and follow the Quick Start above

### Option 2: Clone & Customize

```bash
# Clone the template
git clone https://github.com/your-username/project-setup-template my-project
cd my-project

# Remove git history and start fresh
rm -rf .git
git init
git add .
git commit -m "Initial commit from template"
```

### Customization Checklist

After creating your project:

- [ ] Update `package.json` name and description
- [ ] Modify `README.md` with your project details
- [ ] Set up Clerk authentication keys in `.env.local`
- [ ] Customize branding/colors in `tailwind.config.ts`
- [ ] Update metadata in `app/layout.tsx`
- [ ] Add your custom components in `components/`
- [ ] Replace placeholder pages in `app/`
- [ ] Configure deployment settings

## ⚙️ Configuration

### Clerk Authentication

1. Create a [Clerk account](https://dashboard.clerk.com)
2. Create a new application
3. Copy your keys to `.env.local`:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxx
CLERK_SECRET_KEY=sk_test_xxx
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

### Theme Customization

Edit `tailwind.config.ts` to customize colors, fonts, and spacing:

```typescript
import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Your custom theme config
    },
  },
} satisfies Config
```

## 🔑 Environment Variables

Create a `.env.local` file in the project root:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key_here
CLERK_SECRET_KEY=your_key_here

# Redirect URLs (optional)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

## 📜 Available Scripts

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm lint

# Build and start in production mode
pnpm build && pnpm start
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your repository to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project" and select your repository
4. Add environment variables in Vercel dashboard
5. Click "Deploy"

### Deploy to Other Platforms

See the [Next.js deployment documentation](https://nextjs.org/docs/app/api-reference/config/next-config) for detailed guides for Netlify, AWS, Docker, and other platforms.

### Production Checklist

- [ ] Set up environment variables on your hosting platform
- [ ] Configure Clerk authentication for production domains
- [ ] Enable HTTPS
- [ ] Set up monitoring and error tracking
- [ ] Configure CDN for static assets
- [ ] Test all auth flows before launch

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** this repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Standards

- Use TypeScript for type safety
- Follow ESLint rules provided
- Write meaningful commit messages
- Keep components small and focused
- Add comments for complex logic
- Test your changes before submitting

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 🙋 Support

Found a bug or have a suggestion? Please [open an issue](https://github.com/your-username/project-setup-template/issues) on GitHub.

---

**Built with ❤️ by your-name** | [GitHub](https://github.com/your-username) | [Twitter](https://twitter.com/your-handle)
