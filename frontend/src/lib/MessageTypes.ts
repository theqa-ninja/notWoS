import { ConfirmSubscribePayload } from 'lib/payloads/SubscribePayload';
import LevelPayload from 'lib/payloads/LevelPayload';

export enum MessageType {
  subscribe = 100,
  confirm_subscription = 110,
  message = 200,
  new_level = 300,
  new_game = 400,
  guess = 500
}

export function MessageTypeToString(t: MessageType | number): string {
  return MessageType[t];
}

/**
 * Request payload data type expected based on the MessageRequest.
 */
export type MessageRequest = {
  [MessageType.subscribe]: SocketRequest;
  [MessageType.new_game]: SocketRequest;
  [MessageType.guess]: SocketRequest<{ level_id: UUID; guess: string }>;
};

export type MessageResponse = {
  [MessageType.confirm_subscription]: ConfirmSubscribePayload;
  [MessageType.new_level]: SocketResponse<LevelPayload>;
};

declare type SocketRequest<T = never> = {
  command: string;
  data?: {
    action: string;
  } & T;
  identifier: string;
};

// TODO: the Identifier comes in as a string, is there a way for the response to be in JSON?
export type SocketResponse<T = never> = {
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
