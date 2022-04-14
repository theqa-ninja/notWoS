import { FormEvent, ChangeEvent, useState } from 'react';
import Button from 'components/Button/Button';
import { useParams } from 'react-router-dom';

function JoinRoom() {
  const params = useParams();
  const [roomCode, setRoomCode] = useState<string>(params.id ?? '');
  const setCode = (event: ChangeEvent<HTMLInputElement>) => {
    setRoomCode(event.target.value);
  };

  const submitCode = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`submit ${roomCode}`);
  };
  return (
    <main className="flex flex-col grow justify-center items-center">
      <div className="dialog">
        <h3 className="dialog-title">Join Room</h3>
        <form
          className="flex flex-col gap-2 items-center w-full"
          onSubmit={submitCode}
        >
          <label htmlFor="join-room">Enter your room code</label>
          <input
            id="join-room"
            type="text"
            value={roomCode}
            onChange={setCode}
            className="font-roboto"
          />

          <Button size="lg" popup color="green" className="mt-2">
            join room
          </Button>
        </form>
      </div>
    </main>
  );
}

export default JoinRoom;
