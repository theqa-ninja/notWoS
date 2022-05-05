import { useEffect, useState, useRef, ReactNode } from 'react';
import useClickOutside from 'hooks/useClickOutside';
import classnames from 'classnames';

interface PopoverProps {
  children: ReactNode;
  position?: 'top' | 'left' | 'right' | 'bottom';
  btnContent: ReactNode;
}
function Popover({ position = 'top', children, btnContent }: PopoverProps) {
  const [open, setOpen] = useState(false);
  const popoverClasses = classnames('popover', {
    block: open,
    hidden: !open,
    'popover--top': position === 'top',
    'popover--bottom': position === 'bottom',
    'popover--left': position === 'left',
    'popover--right': position === 'right'
  });
  const popoverRef = useRef<HTMLDivElement>(null);
  const clickedOutside = useClickOutside<HTMLDivElement>(popoverRef);

  useEffect(() => {
    if (clickedOutside && open) {
      setOpen(false);
    }
  }, [clickedOutside, open]);

  return (
    <div className="popover-container" ref={popoverRef}>
      <div className={popoverClasses}>{children}</div>
      <button type="button" onClick={() => setOpen(!open)}>
        {btnContent}
      </button>
    </div>
  );
}

export default Popover;
