import Sidebar from 'components/Sidebar/Sidebar';
import WnosBoard from 'components/WnosBoard/WnosBoard';
import WnosGuessItem from 'components/WnosGuess/WnosGuessItem';
import LockoutBar from 'components/LockoutBar/LockoutBar';
import { useGame } from 'context/GameProvider';
import ScreenState from 'lib/ScreenState';
import CountdownScreen from 'components/Game/CountdownScreen';
import { observer } from 'mobx-react';

const LayoutGame = () => {
  const { screenState, dictionary } = useGame();

  return (
    <>
      <main className="game">
        <section className="game-wnos">
          {screenState === ScreenState.COUNT_DOWN && <CountdownScreen />}
          <WnosBoard annoucement="lunar_marya found a word" />

          <LockoutBar />

          <ul className="wnos-guesses">
            {dictionary.map((i: string) => (
              <WnosGuessItem
                key={i}
                word={i}
                player={
                  Math.floor(Math.random() * 3) === 2 ? 'lunar_marya' : ''
                }
                locked={Math.floor(Math.random() * 3) === 2}
                hidden={Math.floor(Math.random() * 3) === 1}
              />
            ))}
          </ul>
        </section>
        <Sidebar />
      </main>
    </>
  );
};

export default observer(LayoutGame);
