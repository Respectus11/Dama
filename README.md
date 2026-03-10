# Dama Game

Digital Dama board game with real-time multiplayer functionality.

## 🎮 Features

- **Interactive Board UI**: Beautiful, responsive game board with drag-and-drop functionality
- **Real-time Multiplayer**: WebSocket-based communication for seamless multiplayer experience
- **Guest Mode**: Play without registration for instant access
- **Local & Online Play**: Support for both local WiFi and online multiplayer
- **Game Modes**: Local multiplayer, online multiplayer, and AI opponent
- **Modern Tech Stack**: React, Node.js, TypeScript, MongoDB, Socket.IO

## 🚀 Quick Start

### Prerequisites

- Node.js (>=16.0.0)
- npm (>=8.0.0)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm run install:all
   ```

### Development

Start both frontend and backend development servers:
```bash
npm run dev
```

### Build

Build both frontend and backend:
```bash
npm run build
```

## 📁 Project Structure

```
dama/
├── packages/
│   ├── frontend/          # React + TypeScript frontend
│   ├── backend/           # Node.js + Express backend
│   └── shared/            # Shared types and utilities
├── tsconfig.json          # Root TypeScript configuration
└── README.md              # This file
```

## 🛠️ Technologies

### Frontend
- React 18 + TypeScript
- Socket.IO Client
- Framer Motion for animations
- @dnd-kit for drag-and-drop
- Tailwind CSS for styling

### Backend
- Node.js + Express + TypeScript
- Socket.IO Server
- MongoDB + Mongoose
- JWT for authentication

### Development
- TypeScript for type safety
- ESLint + Prettier for code quality
- Concurrently for running multiple servers

## 🎯 Game Features

- **Guest Mode**: Play as a guest without registration
- **Real-time Communication**: WebSocket-based multiplayer
- **Drag & Drop**: Intuitive piece movement
- **Multiple Game Modes**: Local, online, and AI
- **Responsive Design**: Works on desktop and mobile

## 📝 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT