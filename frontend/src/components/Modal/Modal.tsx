import { ReactNode, useRef } from 'react';
import { XIcon } from '@heroicons/react/solid';
import useClickOutside from 'hooks/useClickOutside';
import classnames from 'classnames';

interface ModalProps
  extends React.DetailedHTMLProps<
    React.HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: ReactNode;
  open?: boolean;
  title?: string;
  onClose: () => void;
  hideCloseButton?: boolean;
  color?: Color | 'white';
  enableClickOutside?: boolean;
}

/**
 * A template for a modal with 3 slots
 *
 * @param title - heading of modal
 * @param onClose - close modal event
 * @param children- Main content slot
 * @param hideCloseButton - hide the close button
 * @returns
 */

function Modal({
  enableClickOutside = false,
  onClose,
  children,
  open = false,
  title,
  hideCloseButton = false,
  color = 'white',
  className,
  ...rest
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const clickedOutside = useClickOutside<HTMLDivElement>(modalRef);

  const modalClasses = classnames('modal-overlay', {
    block: open,
    hidden: !open
  });

  const clickOutside = () => {
    if (enableClickOutside && clickedOutside) {
      onClose();
    }
  };

  return (
    <div className={modalClasses} onClick={clickOutside}>
      <div
        role="presentation"
        className={
          'modal scale-in' +
          `bg-${color} ${open ? 'block' : 'hidden'}` +
          className
        }
        ref={modalRef}
        {...rest}
      >
        {title != '' ? (
          <header className="modal-header">
            <span className="w-full text-3xl text-center">{title}</span>
            {!hideCloseButton && (
              <button onClick={onClose}>
                <XIcon className="btn-close" />
              </button>
            )}
          </header>
        ) : null}

        {children}
      </div>
    </div>
  );
}

export default Modal;
