export enum MessageType {
  subscribe = 100,
  message = 200
}

export function MessageTypeToCommand(t: MessageType | number): string {
  return MessageType[t];
}

export type MessageRequest = {
  [MessageType.subscribe]: SocketRequest;
};

declare type SocketRequest = {
  command: string;
  identifier: Identifier;
};

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
