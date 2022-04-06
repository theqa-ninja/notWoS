import { ConfirmSubscribePayload } from 'lib/payloads/SubscribePayload';

export enum MessageType {
  subscribe = 100,
  confirm_subscription = 110,
  message = 200
}

export function MessageTypeToString(t: MessageType | number): string {
  return MessageType[t];
}

export type MessageRequest = {
  [MessageType.subscribe]: SocketRequest;
};

export type MessageResponse = {
  [MessageType.subscribe]: ConfirmSubscribePayload;
};

declare type SocketRequest = {
  command: string;
  identifier: string;
};

// TODO: the Identifier comes in as a string, is there a way for the response to be in JSON?
export type SocketResponse<T> = {
  type?: string;
  identifier: Identifier;
  message?: T;
};

export type Identifier = {
  channel: UUID;
  id: string;
};

// TODO: redundant?
export type SocketRequestPayload<T> = {
  command: string;
  data?: T;
  identifier: Identifier;
};
