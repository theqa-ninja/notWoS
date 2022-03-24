declare type CallbackType = () => void;
declare type CallbackFunction = (cb: CallbackType) => void;

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
  starting_word: number;
  letters: Array<string>;
  valid_words: Array<string>;
  fake_letters: number;
  hidden_letters: number;
  min_length: number;
  max_length: number;
  dictionary: UUID;
};

/**
 * Controllers
 */
declare interface IClientSocketController {
  onUpdateGameState: CallbackFunction;
  onNewGuess: CallbackFunction;
  onCreateGameRoom: CallbackFunction;
  emitJoinRoom: CallbackFunction;
  emitCreateGuess: CallbackFunction;
}

declare interface IGameStateController {
  gameRoom: GameRoom | null;
  levels: Array<Level>;
  currentLevel: number | null;
  setState: (s: GameState) => void;
  createGame: () => void;
}

declare enum GameState {
  IDLE = 100,
  CREATING_GAME,
  WAITING_FOR_HOST,
  STARTING_GAME,
  LOADING_LEVEL,
  ENDING_LEVEL,
  SHOWING_SCOREBOARD,
  GAME_OVER,
  ENDING_GAME
}
