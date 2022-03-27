import ChatMessage, { ChatMessageType } from 'components/Chat/ChatMessage';
import { useEffect, useRef } from 'react';

const Chat = ({ messages }: { messages: ChatMessageType[] }) => {
  const chatRef = useRef<null | HTMLUListElement>(null);

  // Auto-scroll down as messages are inserted
  useEffect(() => {
    if (chatRef.current !== null) {
      chatRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest'
      });
    }
  }, [messages]);

  return (
    <ul className="chat" ref={chatRef}>
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
