# Agency Service Platform

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

A high-performance Single Page Application (SPA) designed as a scalable client portal for digital agencies. Built with a mobile-first architectural approach, utilizing React's component lifecycle for performance and Tailwind CSS for a responsive design system.

### 🚀 **[View Live Demo](https://agency-service-portal.vercel.app)**

---

## 🏗 System Architecture & Design

This project demonstrates a production-ready frontend architecture focusing on three core engineering principles:

1.  **Component Modularity:** Deconstructed UI into Atomic components (Buttons, Cards, Navigation) to ensure code reusability and maintainability across the application.
2.  **Responsive State Management:** Engineered a custom navigation system using React's `useState` hook to handle DOM manipulation and CSS transitions for mobile viewports.
3.  **Performance Optimization:** Leveraged Vite's ESBuild bundler and React Router for seamless client-side navigation (SPA), eliminating full-page reloads and reducing Time-to-Interactive (TTI).

## ✨ Key Features

-   **Dynamic Responsive Navigation:** Custom-built hamburger menu with smooth transition animations and state-driven visibility logic, tested across 5 viewport breakpoints.
-   **Client-Side Routing:** Implemented `react-router-dom` to preserve application state during navigation.
-   **Modern Styling Engine:** Utilized Tailwind CSS utility classes to enforce design consistency, reduce CSS bundle size, and handle dark/light mode foundations.
-   **Cross-Browser Compatibility:** Optimized layout handling (Flexbox/Grid) ensures consistent rendering on Chrome, Firefox, and Safari.

## 🛠 Tech Stack

-   **Frontend:** React.js (v18)
-   **Build Tool:** Vite (Hot Module Replacement)
-   **Styling:** Tailwind CSS
-   **Routing:** React Router DOM v6
-   **Deployment:** Vercel (CI/CD Pipeline)

## 💻 Local Installation

To run this project locally:

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/maharshiicodes/agency-service-portal.git](https://github.com/maharshiicodes/agency-service-portal.git)
    ```

2.  **Install dependencies**
    ```bash
    cd agency-service-portal
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

## 📂 Project Structure

```text
src/
├── components/       # Reusable UI components (NavBar, ServiceCard)
├── pages/            # Route-specific page views (Home, Pricing, Contact)
├── assets/           # Static assets (Images, Icons)
├── App.jsx           # Main application entry and routing logic
└── main.jsx          # DOM rendering
