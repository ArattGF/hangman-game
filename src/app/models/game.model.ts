export type Theme = 'deportes' | 'ciencia' | 'infantil' | 'general';
export type Level = 'normal' | 'avanzado';

export type Sounds = 'acierto' | 'error' | 'victoria' | 'derrota';

export interface WordData {
  theme: Theme;
  level: Level;
  words: string[];
}

export interface GameState {
  secretWord: string;
  lettersGuessed: Set<string>;
  lettersFailed: Set<string>;
  attemptsRemaining: number;
  gameOver: boolean;
  winner: boolean;
}
