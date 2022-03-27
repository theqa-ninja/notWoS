import { ReactNode } from 'react';
import { CogIcon } from '@heroicons/react/solid';
import SidebarBody from 'components/Sidebar/SidebarBody';
import SidebarFooter from 'components/Sidebar/SidebarFooter';
import SidebarHeader from 'components/Sidebar/SidebarHeader';
import Chat from 'components/Chat/Chat';
import { ChatMessageType } from 'components/Chat/ChatMessage';

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Usernames, ThemeColors } from 'utils/MockData';

/* eslint-disable prettier/prettier */
const Sidebar = () => {
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
    <aside className="sidebar">
      <SidebarHeader>
        <h3 className="heading-03">guess</h3>
      </SidebarHeader>
      <SidebarBody>
        <Chat messages={messages} />
      </SidebarBody>
      <form onSubmit={submitMessage}>
        <SidebarFooter>
          <input type="text" value={guess} onChange={onGuess} />
          <section className="flex flex-row justify-between items-center space-x-2 w-full">
            <CogIcon className="w-6 h-6 hover:text-pink transition-all hover:scale-125 hover:rotate-45 hover:cursor-pointer" />
            <button
              type="submit"
              className="py-1 px-2 w-fit h-fit font-fredoka text-background uppercase bg-green rounded border border-gray-2 border-solid"
            >
              guess
            </button>
          </section>
        </SidebarFooter>
      </form>
    </aside>
  );
};

export default Sidebar;
