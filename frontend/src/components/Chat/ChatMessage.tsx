export interface ChatMessageType {
  username: string;
  color: Color;
  message: string;
}

import classnames from 'classnames';

function ChatMessage({ username, color, message }: ChatMessageType) {
  const classes = classnames('chat-username', {
    'chat-username--maroon': color === 'maroon',
    'chat-username--red': color === 'red',
    'chat-username--rosewater': color === 'rosewater',
    'chat-username--flamingo': color === 'flamingo',
    'chat-username--mauve': color === 'mauve',
    'chat-username--pink': color === 'pink',
    'chat-username--peach': color === 'peach',
    'chat-username--yellow': color === 'yellow',
    'chat-username--green': color === 'green',
    'chat-username--teal': color === 'teal',
    'chat-username--blue': color === 'blue',
    'chat-username--sky': color === 'sky',
    'chat-username--lavender': color === 'lavender'
  });
  return (
    <li className="animate-fade-in chat-message">
      <span className={classes}>{username}</span>
      <span className="chat-guess">{message}</span>
    </li>
  );
}

export default ChatMessage;
