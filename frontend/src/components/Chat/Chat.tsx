import ChatInput from './ChatInput';
import { ChatMessageType } from 'components/Chat/ChatMessage';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Usernames, ThemeColors } from 'utils/MockData';
import ChatMessages from './ChatMessages';

function Chat() {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [guess, setGuess] = useState<string>('');

  useEffect(() => {
    // makes sure the max amount of messages is always 200
    if (messages.length >= 200) {
      setMessages((s) => {
        return s.slice(1);
      });
    }
  }, [messages]);

  const submitMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let message: string = Math.floor(Math.random() * 100000).toString();
    if (guess !== '') {
      message = guess;
      setGuess('');
    }
    const username: string =
      Usernames[Math.floor(Math.random() * Usernames.length)];
    const color: string =
      ThemeColors[Math.floor(Math.random() * ThemeColors.length)];
    const newMessage: ChatMessageType = {
      message,
      username,
      color: color as Color
    };
    setMessages((s) => {
      return [...s, newMessage];
    });
  };

  function onGuess(e: ChangeEvent<HTMLInputElement>) {
    setGuess(e.target.value);
  }
  return (
    <>
      <ChatMessages messages={messages} />
      <ChatInput value={guess} onChange={onGuess} onSubmit={submitMessage} />
    </>
  );
}

export default Chat;
