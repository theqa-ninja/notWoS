import Button from 'components/Button';
import Modal from 'components/Modal/Modal';
import ModalContent from 'components/Modal/ModalContent';
import ModalFooter from 'components/Modal/ModalFooter';
import { ClipboardCopyIcon } from '@heroicons/react/solid';
import { useGame } from 'context/GameProvider';

const GameStartScreen = () => {
  const { advanceScreen } = useGame();
  // TODO implement copy button
  return (
    <Modal hideCloseButton open={true}>
      <ModalContent className="flex flex-col justify-center">
        <h3 className="text-center heading-04">Copy to share:</h3>
        <div className="flex gap-4 justify-center">
          <span className="w-fit text-5xl text-center uppercase">4jbd9</span>
          <Button popup iconOnly color="peach">
            <ClipboardCopyIcon className="w-6 h-6" />
          </Button>
        </div>
      </ModalContent>
      <ModalFooter className="!justify-center">
        <Button popup color="green" size="lg" onClick={() => advanceScreen()}>
          Start game
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default GameStartScreen;
