import Sidebar from 'components/Sidebar/Sidebar';
import WosBlock from 'components/WosWord/WosBlock';
import WosWord from 'components/WosWord/WosWord';
import { generateRandomLetter, scrambleWord } from 'utils/Random';

const LayoutGame = () => {
  const word = 'fishhook';
  let scrambled = scrambleWord(word);
  const numOfFakes = 1;
  const numOfHidden = 2;
  const hiddens: number[] = [];
  const fakes: string[] = [];

  for (let i = 0; i < numOfFakes; i++) {
    // TODO: random letter should not also be a letter that's already in original word?
    const rand = generateRandomLetter();
    fakes.push(rand);
    scrambled += rand;
  }

  for (let i = 0; i < numOfHidden; i++) {
    hiddens.push(Math.floor(Math.random() * scrambled.length));
  }

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
              <WosWord>
                {scrambled.split('').map((l: string, i: number) => (
                  <WosBlock
                    key={l}
                    letter={l}
                    hidden={hiddens.includes(i)}
                    fake={fakes.some((f) => f === l)}
                  />
                ))}
              </WosWord>
            </div>
          </div>
        </section>
        <Sidebar />
      </main>
    </>
  );
};

export default LayoutGame;
