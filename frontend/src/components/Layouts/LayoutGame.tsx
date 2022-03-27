import Sidebar from 'components/Sidebar/Sidebar';
import WosBoard from 'components/WosBoard/WosBoard';
import WosGuess from 'components/WosGuess';
import { words } from 'utils/MockData';

const LayoutGame = () => {
  const list = words.sort();
  return (
    <>
      <main className="game">
        <section className="game-wos">
          <WosBoard annoucement="lunar_marya found a word" />
          <ul className="wos-gameboard">
            {list.map((i: string) => (
              <WosGuess
                key={i}
                word={i}
                player="kironto"
                locked={Math.floor(Math.random() * 1) === 1}
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
