import Sidebar from 'components/Sidebar/Sidebar';

const LayoutGame = () => {
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
        <Sidebar />
      </main>
    </>
  );
};

export default LayoutGame;
