import { CogIcon } from '@heroicons/react/solid';

import Sidebar from 'components/Sidebar/Sidebar';
import SidebarBody from 'components/Sidebar/SidebarBody';
import SidebarFooter from 'components/Sidebar/SidebarFooter';
import SidebarHeader from 'components/Sidebar/SidebarHeader';
import Chat from 'components/Chat/Chat';
import { ChatMessageType } from 'components/Chat/ChatMessage';

import { useState, useEffect } from 'react';
import { Usernames, ThemeColors } from 'utils/MockData';

const LayoutGame = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);

  useEffect(() => {
    // makes sure the max amount of messages is always 200
    if (messages.length >= 200) {
      setMessages((s) => {
        return s.slice(1);
      });
    }
  }, [messages]);

  const submitMessage = () => {
    const message: string = Math.floor(Math.random() * 100000).toString();
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

  return (
    <>
      <main className="game">
        <section className="game-wos">
          <div className="word-board">
            <div className="word-board--message">
              <span className="word-board--text">
                lunar_marya found a word!
              </span>
            </div>
            <div className="word-board--anagram">
              <span className="text-lg text-center text-background uppercase">
                unscramble me
              </span>
              <div className="wos-word">
                <span className="wos-block">t</span>
                <span className="wos-block">e</span>
                <span className="wos-block wos-block--hidden">?</span>
                <span className="wos-block">r</span>
                <span className="wos-block wos-block--fake">e</span>
                <span className="wos-block">p</span>
                <span className="wos-block">u</span>
                <span className="wos-block wos-block--hidden">?</span>
                <span className="wos-block wos-block--fake">a</span>
                <span className="wos-block">m</span>
                <span className="wos-block">r</span>
              </div>
            </div>
          </div>
        </section>
        <Sidebar>
          <SidebarHeader>
            <h3 className="heading-03">guess</h3>
          </SidebarHeader>
          <SidebarBody>
            <Chat messages={messages} />
          </SidebarBody>
          <SidebarFooter>
            <input type="text" className="" />
            <section className="flex flex-row justify-between items-center space-x-2 w-full">
              <CogIcon className="w-6 h-6 hover:text-pink transition-all hover:scale-125 hover:rotate-45 hover:cursor-pointer" />
              <button
                type="button"
                onClick={submitMessage}
                className="py-1 px-2 w-fit h-fit font-fredoka text-background uppercase bg-green rounded border border-gray-2 border-solid"
              >
                guess
              </button>
            </section>
          </SidebarFooter>
        </Sidebar>
      </main>
    </>
  );
};

export default LayoutGame;
