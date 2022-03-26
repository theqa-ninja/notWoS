import { CogIcon } from '@heroicons/react/solid';
import { useState, useEffect } from 'react';
const LayoutGame = () => {
  const [messages, setMessages] = useState([
    'temperature',
    'turn',
    'rapture',
    'pert',
    'erupt',
    'merp'
  ]);

  useEffect(() => {
    // makes sure the max amount of messages is always 200
    if (messages.length >= 200) {
      setMessages((s) => {
        return s.slice(1);
      });
    }
  }, [messages]);

  const submitMessage = () => {
    const msg: number = Math.floor(Math.random() * 200);
    setMessages((s) => [...s, msg.toString()]);
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
        <aside className="sidebar">
          <header className="sidebar-heading">
            <h3 className="heading-03">guess</h3>
          </header>
          <div className="overflow-y-auto h-full">
            <div className="flex flex-col justify-end h-fit min-h-full">
              <ul className="chat">
                {messages.map((m, i) => (
                  <li key={i} className="animate-fade-in chat-message">
                    <span className="chat-username chat-username--teal">
                      kironto
                    </span>
                    <span className="chat-guess">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <footer className="flex flex-col space-y-2">
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
          </footer>
        </aside>
      </main>
    </>
  );
};

export default LayoutGame;
