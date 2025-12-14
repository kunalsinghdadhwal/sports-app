# NBA Matches

A modern, responsive web application to view upcoming NBA games. Built with React, TypeScript, and Tailwind CSS, powered by the [balldontlie.io](https://www.balldontlie.io/) API.

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)

## Features

- **Upcoming Games** — View NBA games scheduled for the next 30 days
- **Team Search** — Filter matches by team name or city
- **Pagination** — Navigate through multiple pages of game results
- **Responsive Design** — Works seamlessly on desktop and mobile devices
- **Clean UI** — Minimalist design with smooth user experience

## Preview

The app displays match cards showing:
- Home and visitor teams with abbreviations
- Game date and time
- Team cities
- Match status

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [pnpm](https://pnpm.io/) (or npm/yarn)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/sports-app.git
   cd sports-app
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:

   ```env
   VITE_BALLDONTLIE_API_KEY=your_api_key_here
   ```

   > Get your free API key from [balldontlie.io](https://www.balldontlie.io/)

4. **Start the development server**

   ```bash
   pnpm dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173`

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build locally |
| `pnpm lint` | Run ESLint for code quality |
