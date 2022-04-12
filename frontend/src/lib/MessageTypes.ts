import { ConfirmSubscribePayload } from 'lib/payloads/SubscribePayload';
import LevelPayload from 'lib/payloads/LevelPayload';

export enum MessageType {
  subscribe = 100,
  confirm_subscription = 110,
  message = 200,
  new_level = 300
}

export function MessageTypeToString(t: MessageType | number): string {
  return MessageType[t];
}

export type MessageRequest = {
  [MessageType.subscribe]: SocketRequest;
  [MessageType.new_level]: LevelPayload;
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
  message?: {
    type: string;
    success: boolean;
    data: T;
  };
};

export type Identifier = {
  channel: string;
  id: UUID;
};

// TODO: redundant? might delete
export type SocketRequestPayload<T> = {
  command: string;
  data?: T;
  identifier: Identifier;
};
