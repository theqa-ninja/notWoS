import ChatInput from './ChatInput';
import { ChatMessageType } from 'components/Chat/ChatMessage';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Usernames } from 'utils/MockData';
import ChatMessages from './ChatMessages';
import Colors from 'utils/Colors';
import { observer } from 'mobx-react';
import { useUser } from 'context/UserProvider';

function Chat() {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [guess, setGuess] = useState<string>('');

  const colors: string[] = Object.keys(Colors);
  const user = useUser();

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
    // let message: string = Math.random()
    //   .toString(24)
    //   .substr(2, Math.random() * 10 + 2);
    // if (guess !== '') {
    //   message = guess;
    //   setGuess('');
    // }
    // const username: string =
    //   Usernames[Math.floor(Math.random() * Usernames.length)];
    // const color: string = colors[Math.floor(Math.random() * colors.length)];
    // const newMessage: ChatMessageType = {
    //   message,
    //   username,
    //   color: color as Color
    // };

    if (guess != '') {
      const newMessage: ChatMessageType = {
        message: guess,
        username: user.user.username,
        color: (user.user.guest ? getRandColor() : user.color) as Color
      };
      setMessages((s) => {
        return [...s, newMessage];
      });

      setGuess('');
    }
  };

  function getRandColor(): string {
    return colors[Math.floor(Math.random() * colors.length)];
  }

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
