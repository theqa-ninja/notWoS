import ChatMessage, { ChatMessageType } from 'components/Chat/ChatMessage';
import { useEffect, useRef } from 'react';

const ChatMessages = ({ messages }: { messages: ChatMessageType[] }) => {
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
    <>
      <main className="sidebar-body">
        <div className="flex flex-col justify-end h-fit min-h-full">
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
        </div>
      </main>
    </>
  );
};

export default ChatMessages;
