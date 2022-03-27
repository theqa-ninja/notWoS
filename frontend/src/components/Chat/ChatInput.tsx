import { CogIcon } from '@heroicons/react/solid';
import { FormEventHandler, ChangeEventHandler } from 'react';

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
          <button
            type="submit"
            className="py-1 px-2 w-fit h-fit font-fredoka text-background uppercase bg-green rounded border border-gray-2 border-solid"
          >
            guess
          </button>
        </section>
      </footer>
    </form>
  );
}

export default ChatInput;
