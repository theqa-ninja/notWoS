declare type CallbackType = () => void;
declare type CallbackFunction = (cb: CallbackType) => void;
declare function f<T>(x: T): unknown;
declare type Fn = typeof f;

/**
 * Type Alias
 */
declare type UUID = string;

/**
 * WoS Models
 */
declare type GameRoom = {
  id: UUID;
  game_room: string;
  room_code: string;
  level: number;
  theme_id: UUID;
};

declare type Level = {
  game_room: UUID;
  starting_word: string;
  letters: Array<string>;
  valid_words: Array<string>;
  fake_letters: Array<string>;
  hidden_letters: Array<string>;
  min_length: number;
  max_length: number;
  dictionary: UUID;
};

declare interface IGame {
  addLevel: (l: Level) => void;
  advanceScreen: () => void;
  currentLevel: number | null;
  gameRoom: GameRoom | null;
  screenState: ScreenState;
  lvlState: LevelState;
  levels: Array<Level>;
  resetGame: () => void;
  setCurrentLevel: Dispatch<SetStateAction<number | null>>;
  setGameRoom: Dispatch<SetStateAction<GameRoom | null>>;
  setScreenState: Dispatch<SetStateAction<ScreenState>>;
  setLvlState: Dispatch<SetStateAction<LevelState>>;
}

/**
 *  Different Game states to handle game screens
 *  @enum
 *  @deprecated
 */
declare enum GameState {
  IDLE = 100,
  CREATING_GAME,
  WAITING_FOR_HOST,
  STARTING_GAME,
  NEW_LEVEL, // next-level?
  LOADING_LEVEL,
  ENDING_LEVEL,
  SHOWING_SCOREBOARD,
  GAME_OVER,
  ENDING_GAME
}

declare type LevelState = {
  gameOver: boolean;
  completed: boolean;
};

declare type Color =
  | 'red'
  | 'maroon'
  | 'rosewater'
  | 'flamingo'
  | 'mauve'
  | 'pink'
  | 'peach'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'blue'
  | 'sky'
  | 'lavender';

declare interface Letter {
  char: string;
  hidden: boolean;
  fake: boolean;
}
