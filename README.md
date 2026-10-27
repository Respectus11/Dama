# Dama — Digital Board Game

Dama is a TypeScript workspace for developing a browser-based board game, with shared game-state types intended for a React frontend and a Node.js backend.

> **Project status:** Work in progress. The current repository contains workspace configuration, package manifests, and shared TypeScript contracts. Frontend screens and backend entry points are not yet present, so the project is not currently a playable game.

## Project direction

The shared contracts describe the building blocks for a Dama game:

- Board state, pieces, positions, players, and game sessions
- Moves, move results, winners, and match results
- Socket event types for joining games, sending moves, chat, and game updates
- Game modes for local play, online play, and an AI opponent

These are type definitions and intended interfaces, not a claim that the corresponding game flows are already implemented.

## Technology

| Area | Technologies in the workspace |
| --- | --- |
| Frontend | React 18, TypeScript, Socket.IO client |
| Backend | Node.js, Express, TypeScript, Socket.IO |
| Data layer | MongoDB, Mongoose |
| Shared contracts | TypeScript |
| Developer tooling | npm workspaces, ESLint, Prettier |

## Repository structure

```text
Dama/
├── backend/
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── package.json
│   └── tsconfig.json
├── shared/
│   ├── package.json
│   └── src/
│       └── types.ts
├── package.json
└── tsconfig.json
```

## Getting started

### Prerequisites

- Node.js 16 or later
- npm 8 or later

### Install dependencies

```bash
git clone https://github.com/Respectus11/Dama.git
cd Dama
npm install
```

### Development status

The root package defines scripts for development, building, linting, formatting, and testing:

```bash
npm run dev
npm run build
npm run lint
npm run format
npm test
```

These commands are configured for the intended workspace, but the application entry points and test suite need to be added before the full development and build workflows can run successfully.

## Next implementation steps

1. Implement the game rules and validate legal moves, captures, and win conditions.
2. Build the React board and player interaction flow.
3. Add backend routes and Socket.IO handlers for game sessions.
4. Connect persistence and authentication where required.
5. Add tests for move validation, game state transitions, and multiplayer events.
6. Document environment variables and deployment once the services are implemented.

## License

No license file is currently included. Add a license before distributing or accepting external contributions.
