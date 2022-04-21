import Button from 'components/Button/Button';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useUser } from 'context/UserProvider';
import { observer } from 'mobx-react';

function UsernameDialog() {
  const [username, setUsername] = useState<string>('');
  const store = useUser();
  const setName = (event: ChangeEvent<HTMLInputElement>) => {
    // store.setUsername(event.target.value);
    setUsername(event.target.value);
  };

  const submitUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: username validation
    store.setUsername(username);
  };

  return (
    <div className="dialog">
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
        <span className="input-error"></span>
        <div className="flex flex-row gap-4 justify-between items-center">
          <Button className="mt-2" size="lg" color="green">
            Play as Guest?
          </Button>
          <Button type="submit" className="mt-2" size="lg" color="green">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default observer(UsernameDialog);
