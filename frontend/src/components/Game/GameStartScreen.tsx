import Button from 'components/Button/Button';
import CopyButton from 'components/Button/CopyButton';
import { useGame } from 'context/GameProvider';

const GameStartScreen = () => {
  const { advanceScreen } = useGame();
  return (
    <>
      <main className="flex grow justify-center items-center w-full h-full">
        <section className="dialog">
          <h3 className="text-center heading-04">Copy to share:</h3>
          <div className="flex gap-4 justify-center">
            <span className="w-fit text-5xl text-center uppercase">4jbd9</span>
            <CopyButton
              color="pink"
              popup
              text={`http://${window.location.host}/wnos/join/4jbd9`}
            />
          </div>
          <Button
            popup
            kind="outline"
            color="green"
            size="lg"
            onClick={() => advanceScreen()}
          >
            Start game
          </Button>
        </section>
      </main>
    </>
  );
};

export default GameStartScreen;
