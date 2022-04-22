import Button from 'components/Button/Button';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useUser } from 'context/UserProvider';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface IUsernameDialog {
  roomCode?: string;
}

function UsernameDialog({ roomCode }: IUsernameDialog) {
  const [username, setUsername] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const store = useUser();
  const navigate = useNavigate();
  const setName = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const submitUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username !== '') {
      // TODO: username validation
      // Regex: /^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*$/
      store.setUsername(username);
      startGame();
    } else {
      setErrorMsg('Enter a username');
    }
  };

  const playAsGuest = () => {
    const guestname = String('guest-' + Math.floor(Math.random() * 9999));
    store.setUsername(guestname);
    store.user.guest = true;
    startGame();
  };

  const startGame = () => {
    if (roomCode) {
      navigate(`/wnos/${roomCode}`);
    } else {
      const id: string = Math.random()
        .toString(24)
        .substr(2, Math.random() * 6 + 2);
      navigate(`/wnos/${id}`);
    }
  };

  return (
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
    >
      <h3 className="dialog-title">Enter Username</h3>
      <form
        className="flex flex-col gap-2 items-center w-full"
        onSubmit={submitUser}
      >
        <input
          className="p-1 text-4xl text-center uppercase"
          type="text"
          value={username}
          onChange={setName}
        />
        <span className="input-error">{errorMsg}</span>
        <div className="flex flex-row gap-4 justify-between items-center">
          <Button
            popup
            type="button"
            className="mt-2"
            size="lg"
            color="pink"
            onClick={playAsGuest}
          >
            Play as Guest?
          </Button>
          <Button popup type="submit" className="mt-2" size="lg" color="green">
            Submit
          </Button>
        </div>
      </form>
    </motion.div>
  );
}

export default observer(UsernameDialog);
