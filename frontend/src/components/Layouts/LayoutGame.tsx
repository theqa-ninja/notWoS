import Sidebar from 'components/Sidebar/Sidebar';
import WosBoard from 'components/WosBoard/WosBoard';

const LayoutGame = () => {
  return (
    <>
      <main className="game">
        <section className="game-wos">
          <WosBoard annoucement="lunar_marya found a word" />
          <div className="flex gap-4 justify-end items-start w-full h-full">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 justify-between p-2 w-fit bg-black-3 rounded-lg">
                <div className="flex gap-2 items-center">
                  <span className="text-yellow">hi</span>
                  <span className="text-white">xhumming</span>
                </div>
                <div className="flex gap-2">
                  <span className="w-8 h-8 bg-rosewater rounded"></span>
                </div>
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
