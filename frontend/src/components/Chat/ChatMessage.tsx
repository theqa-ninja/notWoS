export interface ChatMessageType {
  username: string;
  color: Color;
  message: string;
}

import classnames from 'classnames';

function ChatMessage({ username, color, message }: ChatMessageType) {
  const classes = classnames(`chat-username chat-username--${color}`);
  return (
    <li className="animate-fade-in chat-message">
      <span className={classes}>{username}</span>
      <span className="chat-guess">{message}</span>
    </li>
  );
}

export default ChatMessage;
