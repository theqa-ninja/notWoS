import { FormEvent, ChangeEvent, useState } from 'react';
import Button from 'components/Button/Button';
import { useParams } from 'react-router-dom';
import UsernameDialog from 'components/UsernameDialog';
import LayoutMain from 'components/Layouts/LayoutMain';
import { AnimatePresence, motion } from 'framer-motion';

function JoinRoom() {
  const params = useParams();
  const [showUserDialog, setShowUserDialog] = useState<boolean>(false);
  const [roomCode, setRoomCode] = useState<string>(params.id ?? '');
  const [inputError, setInputError] = useState<string>('');
  const setCode = (event: ChangeEvent<HTMLInputElement>) => {
    setRoomCode(event.target.value);
  };

  const submitCode = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!roomCode) {
      return setInputError('Enter a code');
    }

    // TODO: should skip the start screen and into ongoing_game -> check for existing room

    setShowUserDialog(true);
  };
  return (
    <LayoutMain>
      {showUserDialog ? (
        <UsernameDialog roomCode={roomCode} />
      ) : (
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className="dialog"
            initial={{
              scale: 0
            }}
            animate={{
              scale: [1.3, 1]
            }}
            transition={{
              duration: 0.3
            }}
            exit={{
              scale: 0
            }}
          >
            <h3 className="dialog-title">Enter Code</h3>
            <form
              className="flex flex-col gap-2 items-center w-full"
              onSubmit={submitCode}
            >
              <input
                id="join-room"
                type="text"
                value={roomCode}
                onChange={setCode}
                className="!p-1 text-4xl text-center uppercase"
              />
              <span className="input-error">{inputError}</span>

              <Button size="lg" popup color="green" className="mt-2">
                join room
              </Button>
            </form>
          </motion.div>
        </AnimatePresence>
      )}
    </LayoutMain>
  );
}

export default JoinRoom;
