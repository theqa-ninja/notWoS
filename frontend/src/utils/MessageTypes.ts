type MessageType = {
  [key: string]: string;
};

const ON_MESSAGE: MessageType = {
  createGameRoom: 'create game room',
  updateGameState: 'update game state',
  newGuess: 'new guess'
};

const EMIT_MESSAGE: MessageType = {
  joinRoom: 'join room',
  createGuess: 'create guess'
};

export { EMIT_MESSAGE, ON_MESSAGE };
