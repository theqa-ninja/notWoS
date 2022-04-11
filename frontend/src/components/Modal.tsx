import { EventHandler, ReactNode, useState, useRef } from 'react';
import { XIcon } from '@heroicons/react/solid';
import useClickOutside from 'hooks/useClickOutside';
import Button from 'components/Button';
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
  content?: ReactNode; // Main modal content
  footer?: ReactNode;
  hideCloseButton?: boolean;
  color?: Color | 'white';
}

/**
 * A template for a modal with 3 slots
 *
 * @param title - heading of modal
 * @param onClose - close modal event
 * @param content - Main content slot
 * @param children- Main content slot
 * @param footer - Footer content slot
 * @param hideCloseButton - hide the close button
 * @returns
 */

function Modal({
  onClose,
  children,
  open = false,
  title,
  content,
  footer,
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
    if (clickedOutside) {
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
        <header className="modal-header">
          <span className="w-full text-3xl text-center">{title}</span>
          {!hideCloseButton && (
            <button onClick={onClose}>
              <XIcon className="btn-close" />
            </button>
          )}
        </header>

        <main className="modal-main">{children ?? content}</main>

        <footer className="modal-footer">
          {footer ? (
            footer
          ) : (
            <Button popup onClick={onClose} color="red">
              Close
            </Button>
          )}
        </footer>
      </div>
    </div>
  );
}

export default Modal;
