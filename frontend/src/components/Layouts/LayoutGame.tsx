import Sidebar from 'components/Sidebar/Sidebar';
import WosBoard from 'components/WosBoard/WosBoard';
import WosGuess from 'components/WosGuess/WosGuess';
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
        <section className="game-wos">
          <WosBoard annoucement="lunar_marya found a word" />

          <LockoutBar />

          <ul className="wos-guesses">
            {list.map((i: string) => (
              <WosGuess
                key={i}
                word={i}
                player="lunar_marya"
                locked={Math.floor(Math.random() * 3) === 1}
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

//           <div className="timer">
//             <div className="progress">
//               <div className="progress-bar" style={{ width: '10%' }}></div>
//             </div>
//           </div>
