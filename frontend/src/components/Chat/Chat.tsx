import ChatMessage, { ChatMessageType } from 'components/Chat/ChatMessage';

const Chat = ({ messages }: { messages: ChatMessageType[] }) => {
  return (
    <ul className="chat">
      {messages.map((m, i) => (
        <ChatMessage
          key={i.toString()}
          username={m.username}
          color={m.color}
          message={m.message}
        />
      ))}
    </ul>
  );
};

export default Chat;
