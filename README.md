# FitLight Dashboard 🎉✨

Welcome to the **FitLight Dashboard** repository! This project is a modern, responsive dashboard application built with TypeScript, React, and a host of other powerful libraries and tools. Whether you're here to develop, review, or contribute, this guide will walk you through every little detail about the project.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation and Setup](#installation-and-setup)
- [Project Structure](#project-structure)
- [Configuration and Scripts](#configuration-and-scripts)
- [Development Guidelines](#development-guidelines)
- [Contributing](#contributing)
- [License](#license)
- [Contact & Acknowledgements](#contact--acknowledgements)

---

## Overview

The **FitLight Dashboard** is designed to provide an intuitive interface for monitoring and managing health and fitness data. It leverages the latest web technologies to offer an engaging user experience and rapid development workflow.

> **Key Idea:** Make the development process fun, productive, and visually appealing!

---

## Features

- **Interactive UI Components:** Built with React and styled with Tailwind CSS and PostCSS.
- **Responsive Design:** Adapts beautifully to desktop, tablet, and mobile views.
- **Modern Tooling:** Uses Vite for super-fast development builds and instant previews.
- **State Management:** Integrated with powerful hooks and Radix UI primitives for seamless state and UI management.
- **Extensive Documentation:** Everything you need to know is right here in the README. 🙌
- **Data Visualization:** Powered by Recharts for beautiful, interactive charts and graphs.
- **Form Handling:** Simplified with React Hook Form and Zod validation.
- **Accessibility:** Built with accessibility in mind using Radix UI primitives.
- **Theming:** Dark/light mode support with next-themes.
- **Notifications:** Toast notifications via Sonner for a better user experience.

---

## Tech Stack

This project uses a robust set of libraries and tools to ensure a smooth development process:

- **Language:** [TypeScript 5.5.3](https://www.typescriptlang.org/)
- **Framework:** [React 18.3.1](https://reactjs.org/)
- **Bundler:** [Vite 5.4.1](https://vitejs.dev/)
- **CSS Tools:** TailwindCSS & PostCSS
- **UI Components:** [@radix-ui packages](https://www.radix-ui.com/)
- **Testing & Linting:** ESLint and Prettier for code quality assurance
- **Data Fetching:** [@tanstack/react-query 5.56.2](https://tanstack.com/query/latest)
- **Date Handling:** [date-fns 3.6.0](https://date-fns.org/)
- **Charting:** [recharts 2.12.7](https://recharts.org)
- **Form Validation:** [zod 3.23.8](https://zod.dev/) with [@hookform/resolvers 3.9.0](https://github.com/react-hook-form/resolvers)
- **Icons:** [lucide-react 0.462.0](https://lucide.dev/)
- **Carousels:** [embla-carousel-react 8.3.0](https://www.embla-carousel.com/)

*And many more including react-dom, recharts, and various utility libraries to enhance functionality and UI.*

---

## Installation and Setup

### Prerequisites

- **Node.js and npm:** Ensure you have Node.js and npm installed.  
  (If you need help, check out [nvm installation](https://github.com/nvm-sh/nvm#installing-and-updating) for managing Node versions.)

### Step-by-Step Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/aloukikjoshi/fitlight-dashboard.git
   ```

2. **Navigate to the project directory:**

   ```sh
   cd fitlight-dashboard
   ```

3. **Install the dependencies:**

   ```sh
   npm install
   ```

4. **Start the development server:**

   ```sh
   npm run dev
   ```

Now, open your browser at `http://localhost:3000` (or the port provided in your terminal) and enjoy the live reload feature as you work on the project!

---

## Project Structure

Here's a comprehensive overview of the project structure:

```plaintext
fitlight-dashboard/
├── public/                   # Static files such as images and favicon
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── ui/               # Base UI components (buttons, cards, etc.)
│   │   ├── layout/           # Layout components (headers, footers, etc.)
│   │   ├── charts/           # Data visualization components
│   │   ├── forms/            # Form components and validation
│   │   └── dashboard/        # Dashboard-specific components
│   ├── pages/                # Page level components & layouts
│   │   ├── Dashboard/        # Main dashboard page
│   │   ├── Analytics/        # Analytics and reporting page
│   │   ├── Profile/          # User profile page
│   │   └── Settings/         # Application settings page
│   ├── hooks/                # Custom React hooks for state management
│   ├── contexts/             # React context providers
│   ├── utils/                # Utility functions and helpers
│   │   ├── api.ts            # API integration utilities
│   │   ├── formatters.ts     # Data formatting utilities
│   │   └── validators.ts     # Input validation utilities
│   ├── styles/               # Global styles and TailwindCSS configuration
│   │   ├── globals.css       # Global CSS styles
│   │   └── themes/           # Theme definitions
│   ├── types/                # TypeScript type definitions
│   ├── constants/            # Application constants and configuration
│   ├── app.tsx               # Main application component
│   ├── main.tsx              # Application entry point
│   └── router.tsx            # Application routing
├── .eslintrc.js              # ESLint configuration
├── .prettierrc.js            # Prettier configuration
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # TailwindCSS configuration
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
├── package.json              # Project dependencies and scripts
├── package-lock.json         # Locked dependencies
├── README.md                 # Project documentation (you're here!)
└── LICENSE                   # Project license
```

> This structure ensures the project remains well-organized and scalable as new features and components get added.

---

## License

This project is licensed under the [Apache License 2.0](LICENSE). You are free to use, modify, and distribute the project as permitted by this license.

---

## Contact & Acknowledgements

- **Project Maintainer:** [Aloukik Joshi](mailto:aloukikjoshi@gmail.com)

Feel free to reach out if you have any questions or need further assistance. Happy coding! 🚀