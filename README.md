# Kgati Ya Code Frontend

A modern React application built with TypeScript, Vite, and Tailwind CSS. This project provides a comprehensive frontend solution for the Kgati Ya Code platform.

## 🚀 Features

- **React 18** with TypeScript for type-safe development
- **Vite** for fast development and building
- **Tailwind CSS** for utility-first styling
- **React Router** for client-side routing
- **Supabase** integration for backend services
- **ESLint** for code linting and formatting
- **Lucide React** and **React Icons** for iconography

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18 or higher)
- **pnpm** (recommended package manager)
- **Git** for version control

## 🛠️ Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/kgatiyacode/kgati-ya-code-frontend.git
cd kgati-ya-code-frontend
```

### 2. Navigate to Project Directory

```bash
cd project
```

### 3. Install Dependencies

```bash
pnpm install
```

### 4. Environment Configuration

Create a `.env` file in the project directory and add your environment variables:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Other environment variables
VITE_APP_NAME=Kgati Ya Code
```

### 5. Start Development Server

```bash
pnpm run dev
```

The application will be available at `http://localhost:5173`

## 📜 Available Scripts

In the project directory, you can run:

- **`pnpm run dev`** - Starts the development server
- **`pnpm run build`** - Builds the app for production
- **`pnpm run lint`** - Runs ESLint to check code quality
- **`pnpm run preview`** - Previews the production build locally
- **`pnpm run typecheck`** - Runs TypeScript type checking

## 🏗️ Project Structure

```
project/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Checkbox.tsx
│   │   ├── Input.tsx
│   │   ├── Navbar.tsx
│   │   ├── Select.tsx
│   │   └── Textarea.tsx
│   ├── contexts/            # React Context providers
│   │   ├── AuthContext.tsx
│   │   ├── OnboardingContext.tsx
│   │   ├── TemplateContext.tsx
│   │   └── ThemeContext.tsx
│   ├── pages/               # Page components
│   │   ├── Dashboard.tsx
│   │   ├── Landing.tsx
│   │   ├── Login.tsx
│   │   ├── Onboarding.tsx
│   │   ├── Preview.tsx
│   │   ├── Signup.tsx
│   │   └── Templates.tsx
│   ├── theme/               # Theme configuration
│   │   └── colors.ts
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx              # Main App component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── eslint.config.js         # ESLint configuration
```

## 🎨 Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Backend**: Supabase
- **Icons**: Lucide React, React Icons
- **Linting**: ESLint
- **Package Manager**: pnpm

## 🔧 Configuration Files

- **`tailwind.config.js`** - Tailwind CSS configuration
- **`tsconfig.json`** - TypeScript compiler options
- **`vite.config.ts`** - Vite bundler configuration
- **`eslint.config.js`** - ESLint rules and settings
- **`postcss.config.js`** - PostCSS configuration

## 🚀 Deployment

### Build for Production

```bash
pnpm run build
```

The build artifacts will be stored in the `dist/` directory.

### Preview Production Build

```bash
pnpm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License


## 📞 Support
