export const MESSAGE_TYPE = {
  onUpdateGameRoom: 'update_game_room'
};

declare global {
  type CallbackType = () => void;
  type CallbackFunction = (cb: CallbackType) => void;

  /**
   * Type Alias
   */
  type UUID = string;

  /**
   * For WoS game state context
   */

  /**
   * WoS Models
   */
  type GameRoom = {
    id: UUID;
    game_room: string;
    room_code: string;
    level: number;
    theme_id: UUID;
  };

  type Level = {
    game_room: UUID;
    starting_word: number; 
    letters: Array<string>;
    valid_words: Array<string>;
    fake_letters: number;
    hidden_letters: number;
    min_length: number;
    max_length: number;
    dictionary: UUID;
  }


  /**
  * Controllers
  */
  interface IClientSocketController {
    onUpdateGameState: CallbackFunction;
    onNewGuess: CallbackFunction;
    onCreateGameRoom: CallbackFunction;
    emitJoinRoom: CallbackFunction;
    emitCreateGuess: CallbackFunction;
  }

  interface IGameStateController {
    gameRoom: GameRoom | null,
    levels: Array<Level>,
    currentLevel: number | null,
  }

  enum GameState { 
    IDLE = 100,
    CREATING_GAME,
    WAITING_FOR_HOST,
    STARTING_GAME,
    LOADING_LEVEL,
    ENDING_LEVEL,
    SHOWING_SCOREBOARD,
    GAME_OVER,
    ENDING_GAME,
  }
}
