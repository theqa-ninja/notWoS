export const MESSAGE_TYPE = {
  onUpdateGameRoom: 'update_game_room'
};

declare global {
  interface IClientSocketController {
    onUpdateGameState: CallbackFunction;
    onNewGuess: CallbackFunction;
    onCreateGameRoom: CallbackFunction;
    emitJoinRoom: CallbackFunction;
    emitCreateGuess: CallbackFunction;
  }

  type CallbackType = () => void;
  type CallbackFunction = (cb: CallbackType) => void;
}
