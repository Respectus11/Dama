// Game Board Types
export interface Position {
  row: number;
  col: number;
}

export interface GamePiece {
  id: string;
  position: Position;
  color: 'red' | 'blue' | 'green' | 'yellow';
  isKing: boolean;
  playerId: string;
}

export interface GameBoard {
  size: number;
  pieces: GamePiece[];
  currentPlayer: string;
  gameStatus: 'waiting' | 'playing' | 'finished';
  winner?: string;
}

// Player Types
export interface Player {
  id: string;
  name: string;
  isGuest: boolean;
  color?: string;
  score: number;
  lastActive: Date;
}

export interface GuestPlayer extends Player {
  isGuest: true;
  temporaryId: string;
}

// Game Session Types
export interface GameSession {
  id: string;
  players: Player[];
  board: GameBoard;
  createdAt: Date;
  updatedAt: Date;
  gameMode: 'local' | 'online' | 'ai';
  maxPlayers: number;
}

// Socket Events
export interface SocketEvents {
  // Client to Server
  'join-game': (sessionId: string, player: Player) => void;
  'make-move': (sessionId: string, move: Move) => void;
  'send-chat-message': (sessionId: string, message: ChatMessage) => void;
  'surrender': (sessionId: string) => void;

  // Server to Client
  'game-updated': (gameState: GameBoard) => void;
  'player-joined': (player: Player) => void;
  'move-result': (result: MoveResult) => void;
  'game-ended': (result: GameResult) => void;
  'receive-chat-message': (message: ChatMessage) => void;
}

export interface Move {
  from: Position;
  to: Position;
  playerId: string;
}

export interface MoveResult {
  success: boolean;
  message: string;
  capturedPieces?: GamePiece[];
  newKing?: GamePiece;
}

export interface GameResult {
  winner: Player;
  loser: Player;
  duration: number;
  moves: Move[];
}

export interface ChatMessage {
  id: string;
  playerId: string;
  playerName: string;
  message: string;
  timestamp: Date;
  type: 'chat' | 'system';
}