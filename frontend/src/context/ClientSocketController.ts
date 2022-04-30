/**
 * INFO:
 * What if you make a subscription map, where the subsription data type
 * is a TYPE of subsciption (MESSAGE_TYPE) and then the subscription function
 */

import {
  MessageRequest,
  MessageType,
  MessageTypeToString
} from 'lib/MessageTypes';

declare function r<T extends MessageType | number>(
  t: T,
  p: MessageRequest[T]
): void;

export type Request = typeof r;

export interface IClientSocketController {
  request: Request;
  subscribe: (type: MessageType, cb: Fn) => void;
  unsubscribe: (type: MessageType, cb: Fn) => void;
}

export default class ClientSocketController implements IClientSocketController {
  private readonly _socket: WebSocket;
  private readonly _subscription: Map<MessageType, Fn[]> = new Map();

  constructor() {
    this._socket = new WebSocket('ws://localhost:3000/WoScable');

    this._socket.onopen = this.onConnect.bind(this);

    this._socket.onerror = (event: Event) => {
      console.error(event);
    };
    this._socket.onmessage = (event: MessageEvent<string>) => {
      const data = JSON.parse(event.data);
      if (data.type === MessageTypeToString(MessageType.confirm_subscription)) {
        console.log('confirmed subscription');
      }
    };
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
  public subscribe(type: MessageType, cb: Fn): void {
    const lookup = this._subscription.has(type);
    if (!lookup) {
      this._subscription.set(type, []);
    }

    this._subscription.get(type)!.push(cb);
  }

  public unsubscribe(type: MessageType, cb: Fn): void {
    const lookup = this._subscription.has(type);
    if (!lookup) {
      return;
    }

    // TODO: test if this works properly
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
   * Make a "request". Send messages to the server  over the WebSocket connection
   * @param type - Type of message or 'command'
   * @param payload - data to send
   */
  public request<T extends MessageType | number>(
    type: T,
    payload: MessageRequest[T]
  ): void {
    console.log('making request');
    this._socket.send(JSON.stringify(payload));
  }
}
