import { useState, ReactNode } from 'react';
import { CogIcon } from '@heroicons/react/solid';

interface PopoverProps {
  children: ReactNode;
  position?: 'top' | 'left' | 'right' | 'bottom';
  anchorText?: string;
}
function Popover({ anchorText, position = 'top', children }: PopoverProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className={'flex relative justify-center mx-2 mb-2'}>
      <div
        className={
          'absolute left-0 bottom-full p-2 mb-2 text-xs text-white bg-black-2 rounded border-white border-2 shadow' +
          ` ${open ? 'block' : 'hidden'}`
        }
      >
        {children}
      </div>
      <button type="button" onClick={() => setOpen(!open)}>
        {anchorText ? (
          anchorText
        ) : (
          <CogIcon className="w-6 h-6 hover:text-pink transition-all hover:scale-125 hover:rotate-45 hover:cursor-pointer" />
        )}
      </button>
    </div>
  );
}

export default Popover;
