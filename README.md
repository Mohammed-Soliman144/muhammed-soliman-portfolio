# Muhammed Soliman - Frontend Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-muhammed--soliman--portfolio.vercel.app-blue?style=for-the-badge&logo=vercel)](https://muhammed-soliman-portfolio.vercel.app/)
[![GITHUB](https://img.shields.io/badge/GITHUB-REPOSITORY-black?style=for-the-badge&logo=GitHub)](https://github.com/mohammed-soliman144/muhammed-soliman-portfolio/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Key Components](#key-component)
- [Performance Optimizations and Code Quality](#performance-optimizations)
- [License](#license)
- [Contact](#contact)

---

## Overview

A modern, responsive **React + Next.js Portfolio** showcasing advanced frontend engineering. Built with cutting-edge technologies including **TypeScript**, **Tailwind CSS**, **modern React Patterns** and **Next.js App Router**. Focused on server-side-rendering (SSR), optimized performance, clean code, and deliver a seamless user experience.

**Live Deployment:** [muhammed-soliman-portfolio.vercel.app](https://muhammed-soliman-portfolio.vercel.app)

### Project Highlight

- **Server-Side-Rendering (SSR)** with Next.js for optimal SEO.
- **Modern UI/UX** with Tailwind CSS and responsive design.
- **Performance-Optimized** with image, link, form optimization and code splitting.
- **Fully Responsive** - mobile-first approach.
- **Professional Design** - Focused on simplicity and seamless design.
- **Fast Load Times** - optimized assets and caching.

---

## Features

### Core Features

**&#9989; About Section**

- Comprehensive professional background.
- Skills showcase (HTML5, CSS3, JavaScript, React, Next.js, TypeScript, Tailwind CSS, etc.).
- Professional journey and experience highlights.

**&#9989; Projects Section**

- 6+ featured projects with descriptions.
- Technology stack for each project.
- Included live demo links and github repositories.
- Project cards with shimmer shine and hover effects.

**&#9989; Experience Timeline**

- **Chronological Journey** - structured timeline showcasing professional growth and key milestones.
- **CSS Grid Architecture** - used highly responsive grid layout to ensure clean and readable data across all device sizes.
- **Skill Mapping** - highlighted skills gained at each stage.

**&#9989; Testimonials Section**

- Carousel with flex layout.
- Pretty and cleanness transition and animation effect.
- Simulated colleagues feedback (AI-Generated).

**&#9989; Contact Section**

- Used **ZOD Library** for validating contact form.
- Used **Emailjs Provider** and **RESTful API** for connecting my gmail account with form.
- Used **useActionState React Hook** for handling validation inputs, initial state and status of form with server actions.
- Multiple contact methods (email, phone, location).
- **CTA** - Call-to-action buttons.

**&#9989; RandomCircles Component**

- Used multiple **Translate X and Y Variables as React.CSSProperties** for simulating movements in random directions.
- Used **Math.random() Method** for adding randomness of movements with specific predefined range **-0.5 To 0.5**.
- Used browser API **setIntervat()** for repeating the random movements effect with specific predefined range **20m To 30m**.
- Prevented unexpected behaviors when user interact with underlying elements by using **pointer-events-none**.

**&#9989; ScrollToTop and SimulateError Component**

- Used custom component for simulating error within rendering (mounting) component to test catching any error inside page.tsx and inside shared UI layout.tsx.
- Created custom scroll to top button with smooth transition behavior **useEffect React Hook**

**&#9989; SEO Optimization**

- Used **Metadata Next.js Feature** for handling title and description, openGraph and twitter, robots, keywords and alternates.

**&#9989; Downloadable CV**

- Used **Link Component Next.js** for optimizing and enhancing security with noopener and noreferrer.
- PDF download functionality.
- Update resume.

---

## Tech Stack

### Frontend Framework

- **Next.js V16.1.6** - React framework for production.
- **React V19** - UI JavaScript library with hooks and modern patterns.
- **TypeScript V5** - type safety and compilation guard.

### Styling Framework

- **Tailwind CSS V4** - utiltiy-first CSS framework focused on **@utility, @variant, @theme, @theme inline,@layer base, CSS Styles instead of @apply**.
- **clsx V2.1.1** - for avoiding specificity Tailwind CSS utility classes and simplicty Tailwind CSS classes.

### Third-party Libraries

- **Zod V4.3.6** - for validation contact form.
- **lucide-react V0.575.0** - for optimizing performance with React Ecosystem.
- **react-icons V5.5.0** - for optimizing performance with React Ecosystem.
- **devicons/react V0.0.3** - for importing programming languages icons.

### Development Tools

- **ESLint** - code quality.
- **Prettier** - code formatting.

### Deployment

- **Vercel** - optimized Next.js hosting platform.

### Version Control

- **Git/Github** - version control and repository.

---

## Project Structure

```
muhammed-soliman-portfolio/           #domain-name
|--- app/                             # Next.js root directory
|    |-- layout.tsx                   # Root Layout - Shared UI Components
|    |-- page.tsx                     # Main Page - Rerendered UI Components
|    |-- error.tsx                    # Handle Rendering Errors - Main page
|    |-- global-error.tsx             # Handle Rendering Errors - Root Layout
|    |-- loading.tsx                  # Handle Asynchronous Operations - Root Layout
|    |-- not-found.tsx                # Handle 404 Client Side Error - NotFound Routing
|    |-- global.css                   # Global Tailwind CSS utilities classes and CSS
|
|--- components/
|    |-- layout/                      # Shared UI Layout
|        |-- Header.tsx               # Header Component
|        |-- Footer.tsx               # Footer Component
|    |-- ui/                          # Reusable User Interface Components
|        |-- Button.tsx               # Generic Button - CTA Buttons
|        |-- ScrollToTop.tsx          # Specific Button - Scroll To Top
|        |-- RandomCircles.tsx        # Animated Random Circles Component
|        |-- CustomLink.tsx           # Link Component - Button Styled
|    |-- sections/                    # Main Sections
|        |-- Hero.tsx                 # Hero - Landing Component
|        |-- About.tsx                # About Component
|        |-- Projects.tsx             # Projects Component
|        |-- Experiences.tsx          # Experiences Component
|        |-- Testimonials.tsx         # Testimonials Component
|        |-- Contact.tsx              # Contact Component
|    |-- testing/                     # Simplicity UI Tests
|        |-- SimulateError.tsx        # Simulate Rendering Error in page and layout
|
|--- assets/                          # Moduled and Bundled Optimized assets
|    |-- imgs                         # all Images inside portfolio
|
|--- _libs/                           # Private File Route System (for server actions)
|    |-- actions/                     # Handle Server Actions
|        |-- server-actions.ts        # Handle Zod Validation Inputs and Form Submission RESTful API
|
|--- public/                          # Public Static Assets
|    |-- imgs                         # Hero Section image for Social Media (SEO openGraph-Twitter)
|    |-- Muhammed_Soliman.pdf         # Resume
|
|--- eslint.config.mjs                # ESlint Configuration
|--- next.config.ts                   # Next.js Configuration
|--- ts.config.json                   # TypeScript Configuration
|--- package.json                     # Dependencies Installed
|--- package-lock.json                # Dependencies Installed - Locked File
|--- postcss.config.mjs               # Postcss Configuration
|--- README.md                        # README.md Markdown File
```

---

## Getting Started

### Prerequirements

- **Node.js** - version 16 or higher
- **npm** - node package manager version 7 or higher
- **Git** - Version Control 2 or higher

### Development Tools

- **VS Code** - code editor
- **ESLint Extension** - code quality
- **Prettier Extension** - code formatting

### Installation

#### 1. Clone the Repository

```bash
# clone my repo
git clone https://github.com/Mohammed-Soliman144/muhammed-soliman-portfolio.git
# change directory
cd muhammed-soliman-portfolio
```

#### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

#### 3. Create Environment Variable (for Emailjs API Constant Variables)

```bash
# create .env.local file (Private API TOKEN, Public key, Template ID, Service ID)
touch .env.local
# Print in file via CMD
echo EMAILJS_PUBLIC_KEY=123 >> .env.local
echo EMAILJS_SERVICE_ID=123 >> .env.local
echo EMAILJS_TEMPLATE_ID=123 >> .env.local
echo EMAILJS_PRIVATE_ACCESS_TOKEN=123 >> .env.local
```

### Development

#### 1. Start Development Server

```bash
npm run dev
# or
yarn run dev
# or
pnpm run dev
```

Open [https://localhost:3000](https://localhost:3000) check your browser to see result.

## Deployment

### Deployed on Vercel

The portfolio is automatically deployed on **Vercel** with each `git push origin main` to the main branch.

#### Deployment Process

1. Push code to your GitHub Account.
   2- Vercel automatically detects changes.
   3- Builds and deploys new version.
   4- Live Demo at [muhammed-soliman-portfolio.vercel.app](https://muhammed-soliman-portfolio.vercel.app)

#### Manual Deployment

```bash
# Install Vercel CLI (command line interface)
npm install -g vercel

# Deploy
vercel

#Deploy for production
vercel --prod
```

#### Domain Configuration

- Primary Domain: `muhammed-soliman-portfolio.vercel.app`
- Custom domain in this pattern `<custom-domain-name>-git<branch>.vercel.app`

---

## Key Components

### 1. Hero Component (`components/sections/Hero.tsx`)

**Purpose:** - Landing hero section with introduction and call-to-action button.

**Features:**

- Profile introduction.
- Download CV button.
- Social media links.
- Responsive image background.
- Call-to-action button.
- Technologies stack navigation.

```typescript
export default function Hero() {
   return (
      <section id="hero" className="hero-section">
         <div className="container">
            {/* Hero Content */}
         </div>
      </section>
   )
}
```

### 2. About Component (`components/sections/About.tsx`)

**Purpose:** - Professional background and skills.

**Features:**

- Professional and skills summary.
- Grid architecture responsive Layout.
- Mission statement.

```typescript
export default function About() {
   return (
      <section id="about" className="about-section">
         <div className="container">
            {/* Hero Content */}
         </div>
      </section>
   )
}
```

### 3. Projects Component (`components/sections/Projects.tsx`)

**Purpose:** - Showcase featured projects.

**Features:**

- Project cards with descriptions.
- Technology stack tags.
- Live demo links.
- Links to GitHub repositories.
- Grid architecture responsive layout.

```typescript
export default function Projects(){
   return (
      <section id="projects" className="project-section">
         <div className="container">
         </div>
      </section>
   )
}
```

### 4. Experiences Component (`components/sections/Experiences.tsx`)

**Purpose:** - Learning and experience timeline.

**Features:**

- Chronological work history.
- Role descriptions.
- Duration, dates and current status.
- Timeline visualization.
- Grid architecture responsive layout.

```typescript
export default function Experiences(){
   return (
      <section id="experiences" className="experience-section">
         <div className="container">
         </div>
      </section>
   )
}
```

### 5. Testimonials Component (`components/sections/Testimonials.tsx`)

**Purpose:** - Simulated AI-Generated feedback.

**Features:**

- AI-Generated feedback.
- Radial background image.
- Seamless animation and transition effect.
- Carousel flex layout.
- Carousel navigation and indicators buttons.

```typescript
export default function Testimonials(){
   return (
      <section id="testimonials" className="testimonial-section">
         <div className="container">
         </div>
      </section>
   )
}
```

### 6. Contact Component (`components/sections/Contact.tsx`)

**Purpose:** - Contact form submission.

**Features:**

- Contact form with Zod library for validation inputs.
- useActionState React Hook for handling initial state, status form and server action.
- Emailjs Provider and RESTful API - Method POST.
- useRef React Hook for reseting form.
- Form Component Next.js for optimizing performance.

```typescript
export default function Contact(){
   return (
      <section id="contact" className="contact-section">
         <div className="container">
         </div>
      </section>
   )
}
```

---

## Performance Optimizations

### Image Optimization

- Used Next.js `Image` Component for automatic optimization.
- Lazy loading for seamless image loading.
- Responsive image sizing with `src`

```typescript
/* import statement */
import Image from 'next/image'
// Function component
export default function ComponentName() {
   return (
      <Image src="/hero.png" alt="alternate text" width={1200} height={800} loading="lazy" />
   )
}
```

### Link Optimizations

- Used Next.js `Link` Component for handling internal links.
- Prevented full-page reload and instant transition.
- Prefetching all internal links which download js code when link visible in viewport.

```typescript
/* import statement */
import Link from 'next/link'
// Function component
export default function ComponentName() {
   return (
      <Link href="" prefetch="true" />
   )
}
```

### Code Splitting

- Automatic code splitting by Next.js (js chunks).
- Dynamic imports for heavy components.
- Route-based code splitting.

### Caching Strategy

- Static Site Generation for Static Content (Default SSG Rendering Strategy Used in my Portfolio)
- Browser Caching for assets (images)

### TypeScript

- Type safety across codebase.
- Fewer runtime errors.

### SEO Optimization

- &#9989; Description and title meta tags.
- &#9989; Keywords and Authors meta tags.
- &#9989; openGraph and twitter meta tags.
- &#9989; Robots and alternates meta tags.

### Accessibility

- &#9989; Used Semantic HTML.
- &#9989; Used ARIA Labels where needed.
- &#9989; Used Alt text on images.
- &#9989; Used Color contrast compliance.

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) File for details.

---

## Contact

### Get in Touch

- **Email:** [mohammedsoliman144@gmail.com](mailto:mohammedsoliman144@gmail.com)
- **Phone:** [+20 (01555) 382-692](tel:+2001555382692)
- **Location:** Cairo, Egypt.
- **Portfolio:** [muhammed-soliman-portfolio.vercel.app](https://muhammed-soliman-portfolio.vercel.app)

### Social Links

- **GitHub:** [Mohammed-Soliman144](https://github.com/Mohammed-Soliman144)
- **LinkedIn:** [muhammed-soliman144](https://www.linkedin.com/in/muhammad-soliman144/)

---

## Author

### Muhammed Soliman

- Frontend Developer
- React & Next.js Specialist
- TypeScript Developer
- Cairo, Egypt

---

## Acknowledgements

- Many Thanks To [Pedro Machado](https://github.com/machadop1407/react-tailwind-personal-portfolio).
- Design and color palette inspired by **Pedro Machado**.
- Note: This Project is a complete technical rewrite using **Next.js**, **TypeScript**, **modern React Patterns**, and the **App Router** for enhanced performance and Server Side Rendering (SSR).

---

- **Last Updated:** March 22,2026
- **Version:** 1.0.0
- **Status:** &#9989; Production Ready

---

## Quick Links

| Link                                                                                     | Description        |
| ---------------------------------------------------------------------------------------- | ------------------ |
| [Live Demo](https://muhammed-soliman-portfolio.vercel.app)                               | View the portfolio |
| [GitHub Repo](https://github.com/Mohammed-Soliman144/muhammed-soliman-portfolio/)        | View source code   |
| [Report Issue](https://github.com/Mohammed-Soliman144/muhammed-soliman-portfolio/issues) | Report a bug       |
| [Email](mailto:mohammed-soliman144@gmail.com)                                            | Contact directly   |

## Happy Coding!

**_Made with &#10084; by Muhammed Soliman_**
