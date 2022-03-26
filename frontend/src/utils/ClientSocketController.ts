import io from 'socket.io-client';
import type { Socket } from 'socket.io-client';
import { ON_MESSAGE, EMIT_MESSAGE } from './MessageTypes';

enum Message {
  CREATE_GAME_ROOM = 'createGameRoom',
  UPDATE_GAME_STATE = 'updateGameState',
  NEW_GUESS = 'newGuess',
  JOIN_ROOM = 'joinRoom',
  CREATE_GUESS = 'createGuess'
}

declare function f<T>(x: T): unknown;
declare type Fn = typeof f;

/**
 * INFO:
 * What if you make a subscription map, where the subsription data type
 * is a TYPE of subsciption (MESSAGE_TYPE) and then the subscription function
 */

export default class ClientSocketController implements IClientSocketController {
  private readonly _socket: Socket;
  private readonly _subscription: Map<Message, Fn[]> = new Map();

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
   * Subscribe to incoming socket messages based on type
   */
  public subscribe(type: Message, cb: Fn): void {
    const lookup = this._subscription.has(type);
    if (!lookup) {
      this._subscription.set(type, []);
    }

    this._subscription.get(type)!.push(cb);
  }

  public unsubscribe(type: Message, cb: Fn): void {
    const lookup = this._subscription.has(type);
    if (!lookup) {
      return;
    }

    // TODO: test if this works probably
    const map = this._subscription.get(type)!;
    for (let i = 0; i < map.length; i++) {
      if (map[i] === cb) {
        map.splice(i, 1);
        break;
      }
    }

    if (map.length === 0) {
      this._subscription.delete(type);
    }
  }

  /**
   * Listen for 'update game state' event
   *
   * @param cb - callback function
   */
  public onUpdateGameState(cb: () => void) {
    this._socket.on(ON_MESSAGE.updateGameState, () => {
      cb();
    });
  }

  /**
   * Listen for 'create game room' event
   *
   * @param cb - callback function
   */
  public onCreateGameRoom(cb: () => void) {
    this._socket.on(ON_MESSAGE.createGameRoom, () => {
      cb();
    });
  }

  /**
   * Handle new guess
   *
   * @param cb - callback function
   */
  public onNewGuess(cb: () => void) {
    this._socket.on(ON_MESSAGE.newGuess, () => {
      cb();
    });
  }

  public emitJoinRoom(cb: () => void) {
    this._socket.on(EMIT_MESSAGE.joinRoom, () => {
      cb();
    });
  }

  public emitCreateGuess(cb: () => void) {
    this._socket.on(EMIT_MESSAGE.createGuess, () => {
      cb();
    });
  }
}
