import Button from 'components/Button';
import Modal from 'components/Modal/Modal';
import ModalContent from 'components/Modal/ModalContent';
import ModalFooter from 'components/Modal/ModalFooter';
import { useGame } from 'context/GameProvider';
import { useState } from 'react';

const GameStartScreen = () => {
  const [open, setOpen] = useState<boolean>(true);
  const { advanceScreen } = useGame();
  return (
    <Modal
      color="green"
      hideCloseButton
      onClose={() => setOpen(false)}
      open={open}
    >
      <ModalContent>start screen</ModalContent>
      <ModalFooter className="!justify-center">
        <Button color="green" onClick={() => advanceScreen()}>
          Start game
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default GameStartScreen;
