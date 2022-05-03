import { CogIcon } from '@heroicons/react/solid';
import { FormEventHandler, ChangeEventHandler } from 'react';
import Button from 'components/Button/Button';
import Popover from 'components/Popover/Popover';
import Colors from 'utils/Colors';
import { useUser } from 'context/UserProvider';

function ChatInput(props: {
  onSubmit: FormEventHandler<HTMLFormElement> | undefined;
  value: string | number | readonly string[] | undefined;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}): JSX.Element {
  const user = useUser();
  return (
    <form onSubmit={props.onSubmit}>
      <footer className="sidebar-footer">
        <input type="text" value={props.value} onChange={props.onChange} />
        <section className="flex flex-row justify-between items-center space-x-2 w-full">
          <Popover position="left">
            <ul className="flex flex-wrap gap-2 w-[10rem] h-fit">
              {Object.values(Colors).map((c) => {
                return (
                  <li
                    role="button"
                    key={c}
                    className={
                      'w-5 h-5 rounded-full hover:scale-125 transition-all duration-75' +
                      ` bg-${c}`
                    }
                    onClick={() => {
                      user.color = c;
                    }}
                  ></li>
                );
              })}
            </ul>
          </Popover>
          <Button type="submit" color="green">
            guess
          </Button>
        </section>
      </footer>
    </form>
  );
}

export default ChatInput;
