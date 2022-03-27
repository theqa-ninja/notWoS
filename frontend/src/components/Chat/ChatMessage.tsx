export interface ChatMessageType {
  username: string;
  color: Color;
  message: string;
}

function ChatMessage({ username, color, message }: ChatMessageType) {
  return (
    <li className="animate-fade-in chat-message">
      <span className={`chat-username chat-username--${color}`}>
        {username}
      </span>
      <span className="chat-guess">{message}</span>
    </li>
  );
}

export default ChatMessage;
