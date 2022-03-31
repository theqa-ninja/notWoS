export interface ChatMessageType {
  username: string;
  color: Color;
  message: string;
}

import classnames from 'classnames';
import Colors from 'utils/Colors';

function ChatMessage({ username, color, message }: ChatMessageType) {
  const classes = classnames('chat-username', {
    'chat-username--maroon': color === Colors.maroon,
    'chat-username--red': color === Colors.red,
    'chat-username--rosewater': color === Colors.rosewater,
    'chat-username--flamingo': color === Colors.flamingo,
    'chat-username--mauve': color === Colors.mauve,
    'chat-username--pink': color === Colors.pink,
    'chat-username--peach': color === Colors.peach,
    'chat-username--yellow': color === Colors.yellow,
    'chat-username--green': color === Colors.green,
    'chat-username--teal': color === Colors.teal,
    'chat-username--blue': color === Colors.blue,
    'chat-username--sky': color === Colors.sky,
    'chat-username--lavender': color === Colors.lavender
  });
  return (
    <li className="animate-fade-in chat-message">
      <span className={classes}>{username}</span>
      <span className="chat-guess">{message}</span>
    </li>
  );
}

export default ChatMessage;
