# 🎮 Tic-Tac-Toe Game (○×ゲーム)

<div align="center">

[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

Interactive Tic-Tac-Toe game built with React, TypeScript, and Vite.

[Live Demo](#-live-demo) • [Features](#-features) • [Getting Started](#-getting-started) • [Deployment](#-deployment)

</div>

---

## 🌐 Live Demo

🚀 **Deploy your own:**
- **Netlify**: [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kazu1999-3/tic-tac-toe-game)
- **Vercel**: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/kazu1999-3/tic-tac-toe-game)

## ✨ Features

### Game Mechanics
- 🎯 **Classic Tic-Tac-Toe gameplay** - Timeless 3x3 grid game
- 🏆 **Winner detection** - Automatically detects winning combinations
- 🌟 **Visual highlighting** - Golden animation for winning line
- 🤝 **Draw detection** - Identifies when the game ends in a tie
- 🔄 **Game reset** - Quick restart with a single click

### Design & UX
- 🎨 **Beautiful gradient UI** - Purple gradient background
- ✨ **Smooth animations** - Pop, pulse, and fade effects
- 📱 **Fully responsive** - Optimized for mobile, tablet, and desktop
- 🖱️ **Interactive feedback** - Hover effects and click animations
- 🌈 **Modern styling** - Clean, rounded corners and shadows

### Technical
- ⚡ **Fast performance** - Built with Vite for optimal speed
- 🔒 **Type safety** - Full TypeScript implementation
- 🧩 **Component-based** - Modular React architecture
- 📦 **Zero dependencies** - Pure React, no game libraries needed

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 20.x or higher
- **npm**: 10.x or higher (or yarn/pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/kazu1999-3/tic-tac-toe-game.git

# Navigate to project directory
cd tic-tac-toe-game

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| [React](https://reactjs.org/) | UI Library | 18.x |
| [TypeScript](https://www.typescriptlang.org/) | Type Safety | 5.x |
| [Vite](https://vitejs.dev/) | Build Tool | 7.x |
| [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) | Styling | - |

## 📦 Available Scripts

```bash
npm run dev      # Start development server (localhost:5173)
npm run build    # Build for production (output: dist/)
npm run preview  # Preview production build locally
npm run lint     # Run ESLint for code quality
```

## 🎮 How to Play

1. **Take Turns**: Player X starts, then Player O
2. **Click a Cell**: Choose an empty cell to place your mark
3. **Win Condition**: Get three marks in a row (horizontal, vertical, or diagonal)
4. **Reset**: Click the "リセット" button to start a new game

### Game States
- 🟢 **Playing**: Shows current player (X or O)
- 🏆 **Winner**: Displays winner with golden highlight
- 🤝 **Draw**: All cells filled, no winner

## 📁 Project Structure

```
tic-tac-toe-game/
├── src/
│   ├── App.tsx          # Main game component
│   ├── App.css          # Game styling
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── dist/                # Production build (generated)
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
├── netlify.toml         # Netlify deployment config
└── package.json         # Project dependencies
```

## 🚀 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings are auto-detected from `netlify.toml`
6. Click "Deploy site"

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite configuration
6. Click "Deploy"

### Manual Deployment

```bash
# Build the project
npm run build

# The dist/ folder contains your production-ready app
# Upload the contents to any static hosting service
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Powered by [Vite](https://vitejs.dev/)
- Styled with modern CSS3
- Deployed on [Netlify](https://www.netlify.com/) / [Vercel](https://vercel.com/)

## 📧 Contact

GitHub: [@kazu1999-3](https://github.com/kazu1999-3)

Repository: [https://github.com/kazu1999-3/tic-tac-toe-game](https://github.com/kazu1999-3/tic-tac-toe-game)

---

<div align="center">

Made with ❤️ using React + TypeScript + Vite

⭐ Star this repo if you found it helpful!

</div>
