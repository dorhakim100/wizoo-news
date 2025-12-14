# Real Estate Center

A modern news and media platform built with Vue.js, featuring articles, podcasts, and video-on-demand (VOD) content focused on real estate and industry news.

## 🌐 Live Demo

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-Visit_Now-4CAF50?style=for-the-badge&logo=render&logoColor=white)](https://wizoo-news.onrender.com)

**[👉 View Live Application](https://wizoo-news.onrender.com)**

## 🛠 Tech Stack

- **Framework**: Vue 3 (Composition API)
- **Build Tool**: Vite 7.2.4
- **Routing**: Vue Router 4.6.4
- **UI Library**: Ant Design Vue 4.2.6
- **Styling**: SCSS/Sass
- **Icons**: Ant Design Icons Vue

## 📁 Project Structure

```
wizoo-news/
├── public/                 # Static assets
│   ├── imgs/              # Image assets
│   └── socials-links/     # Social media icons
├── src/
│   ├── assets/            # Project assets
│   │   ├── fonts/         # Custom fonts
│   │   ├── icons/         # SVG icons
│   │   └── jsons/         # JSON configuration files
│   ├── components/        # Vue components
│   │   ├── article/       # Article-related components
│   │   ├── common/        # Shared/common components
│   │   ├── podcast/       # Podcast components
│   │   └── vod/           # Video-on-demand components
│   ├── config/            # Configuration files
│   ├── pages/             # Page components
│   ├── router/            # Vue Router configuration
│   ├── services/          # Business logic and utilities
│   └── styles/            # SCSS stylesheets
├── dist/                  # Build output (generated)
└── index.html             # Entry HTML file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/dorhakim100/wizoo-news.git
cd wizoo-news
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in the terminal).

## ✨ Key Features

### Components

- **AppHeader**: Main navigation and header
- **AppFooter**: Footer with links and social media
- **HomeDashboard**: Main dashboard with featured content
- **ArticlesType**: Article listings by category
- **PodcastDashboard**: Podcast content display
- **VodDashboard**: Video content display

### Functionality

- Responsive design (mobile and desktop)
- Random article selection for featured sections
- Hebrew language support (RTL)
- SVG icon integration

## 🏗 Architecture

### Component Hierarchy

```
App.vue
├── AppHeader
├── RouterView (HomeView)
│   ├── HomeDashboard
│   ├── ArticlesType (multiple instances)
│   ├── VodDashboard
│   └── PodcastDashboard
└── AppFooter
```

### Data Flow

- Configuration data is stored in JSON files under `src/assets/jsons/`
- Services handle business logic (article types, utilities)
- Components receive data via props
- Computed properties handle dynamic data transformations

### Routing

Currently configured with a single route:

- `/` - Home page (HomeView)

Additional routes can be added in `src/router/const.js`.

## 🎨 Styling

The project uses SCSS with a modular structure:

- `styles/app.scss` - Main stylesheet
- `styles/setup/` - Variables, mixins, functions, typography
- `styles/basics/` - Base styles, colors, animations, helpers

### Color System

Article types are mapped to specific colors:

- Urban renewal → Green
- Industry news → Orange
- Income-producing → Blue
- Architecture → Pink
- Residential real estate → Gold
- Opinions/analysis → Bottle green
- Faces behind → Scarlet

## 🚢 Deployment

The application is deployed and live at:

[![Deployment Status](https://img.shields.io/badge/Status-Live-success?style=flat-square)](https://wizoo-news.onrender.com) [![Platform](https://img.shields.io/badge/Platform-Render-46E3B7?style=flat-square&logo=render)](https://render.com)

🔗 **Live URL**: [https://wizoo-news.onrender.com](https://wizoo-news.onrender.com)

### JSON Configuration Files

Content is managed through JSON files:

- `home-dashboard.json` - Home page dashboard data
- `vod-dashboard.json` - Video dashboard data
- `podcast-dashboard.json` - Podcast dashboard data
- `header-links.json` - Navigation links
- `footer-links.json` - Footer links
- `socials.json` - Social media links

### Custom Components

- `CustomDate` - Date formatting component
- `CustomHeader` - Reusable header component
- `CustomLabel` - Label component
- `CustomPlay` - Play button component
- `CustomSearch` - Search input component
- `Merkaz` - Merkaz logo component
- `TradeMarks` - Trademarks display component
