import { FormEvent, ChangeEvent, useState } from 'react';
import Button from 'components/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';

function JoinRoom() {
  const navigate = useNavigate();
  const params = useParams();
  const [roomCode, setRoomCode] = useState<string>(params.id ?? '');
  const [inputError, setInputError] = useState<string>('');
  const setCode = (event: ChangeEvent<HTMLInputElement>) => {
    setRoomCode(event.target.value);
  };

  const submitCode = (e: FormEvent<HTMLFormElement>) => {
    // TODO: check for invalid code
    e.preventDefault();
    !roomCode && setInputError('Enter a code');
    roomCode && navigate(`/wnos/${roomCode}`);
  };
  return (
    <main className="flex flex-col grow justify-center items-center">
      <div className="dialog">
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
      </div>
    </main>
  );
}

export default JoinRoom;
