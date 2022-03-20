import io from 'socket.io-client';
import type { Socket } from 'socket.io-client';

export default class ClientSocketController implements IClientSocketController {
  private readonly _socket: Socket;

  constructor() {
    this._socket = io('ws://localhost:3000/WoScable');

    this._socket.on('connect_error', (err) => {
      console.warn(`Socket connection error: ${err}`);
    });

    this._socket.on('connect_error', (err) => {
      console.warn(`Socket connection error: ${err}`);
    });

    this._socket.on('connect', this.onConnect.bind(this));
    this._socket.on('disconnect', this.onDisconnect.bind(this));

    this._socket.on('reconnection_attempt', (attempt) => {
      console.log(`Socket reconnection attempt #${attempt}`);
    });
  }

  private onConnect(): void {
    console.log('Socket connected.');
  }

  private onDisconnect(msg: string): void {
    console.log(`Socket disconnected: ${msg}`);
  }

  /**
   * Listen for 'update game state' event
   *
   * @param cb - callback function
   */
  public onUpdateGameState(cb: () => void) {
    this._socket.on('updateGameState', () => {
      cb();
    });
  }


  /**
   * Listen for 'create game room' event
   *
   * @param cb - callback function
   */
  public onCreateGameRoom(cb: () => void) {
    this._socket.on('createGameRoom', () => {
      cb();
    });
  }
  
  /**
   * Handle new guess 
   *
   * @param cb - callback function
   */
  public onNewGuess(cb: () => void) {
    this._socket.on('newGuess', () => {
      cb();
    });
  }
}
