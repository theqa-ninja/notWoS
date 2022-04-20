import Button from 'components/Button/Button';
import CopyButton from 'components/Button/CopyButton';
import { useGame } from 'context/GameProvider';
import { useParams } from 'react-router-dom';

const GameStartScreen = () => {
  const game = useGame();
  const params = useParams();
  // TODO: if owner, show start game, else show waiting screen
  return (
    <>
      <main className="flex grow justify-center items-center w-full h-full">
        <section className="dialog">
          <h3 className="text-center heading-04">Copy to share:</h3>
          <div className="flex gap-4 justify-center">
            <span className="w-fit text-5xl text-center uppercase">
              {params.code}
            </span>
            <CopyButton
              color="pink"
              popup
              text={`http://${window.location.host}/wnos/join/${params.code}`}
            />
          </div>
          <Button
            popup
            kind="outline"
            color="green"
            size="lg"
            onClick={() => game.advanceScreen()}
          >
            Start game
          </Button>
        </section>
      </main>
    </>
  );
};

export default GameStartScreen;
