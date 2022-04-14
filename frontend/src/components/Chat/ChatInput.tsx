import { CogIcon } from '@heroicons/react/solid';
import { FormEventHandler, ChangeEventHandler } from 'react';
import Button from 'components/Button/Button';

function ChatInput(props: {
  onSubmit: FormEventHandler<HTMLFormElement> | undefined;
  value: string | number | readonly string[] | undefined;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}): JSX.Element {
  return (
    <form onSubmit={props.onSubmit}>
      <footer className="sidebar-footer">
        <input type="text" value={props.value} onChange={props.onChange} />
        <section className="flex flex-row justify-between items-center space-x-2 w-full">
          <CogIcon className="w-6 h-6 hover:text-pink transition-all hover:scale-125 hover:rotate-45 hover:cursor-pointer" />
          <Button type="submit" color="green">
            guess
          </Button>
        </section>
      </footer>
    </form>
  );
}

export default ChatInput;
