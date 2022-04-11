import Sidebar from 'components/Sidebar/Sidebar';
import WnosBoard from 'components/WnosBoard/WnosBoard';
import WnosGuess from 'components/WnosGuess/WnosGuess';
import LockoutBar from 'components/LockoutBar/LockoutBar';
import { words } from 'utils/MockData';

const LayoutGame = () => {
  let list = words.sort();
  list = words.sort((a: string, b: string) => {
    if (a.length > b.length) return 1;
    if (a.length < b.length) return -1;
    return 0;
  });

  return (
    <>
      <main className="game">
        <section className="game-wnos">
          <WnosBoard annoucement="lunar_marya found a word" />

          <LockoutBar />

          <ul className="wnos-guesses">
            {list.map((i: string) => (
              <WnosGuess
                key={i}
                word={i}
                player={
                  Math.floor(Math.random() * 3) === 2 ? 'lunar_marya' : ''
                }
                locked={Math.floor(Math.random() * 3) === 2}
                hidden={Math.floor(Math.random() * 3) === 1}
                length={i.length}
              />
            ))}
          </ul>
        </section>
        <Sidebar />
      </main>
    </>
  );
};

export default LayoutGame;
