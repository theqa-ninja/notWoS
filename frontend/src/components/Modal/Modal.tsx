import { ReactNode, useRef } from 'react';
import { XIcon } from '@heroicons/react/solid';
import useClickOutside from 'hooks/useClickOutside';
import classnames from 'classnames';
import { motion } from 'framer-motion';

interface ModalProps
  extends React.DetailedHTMLProps<
    React.HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: ReactNode;
  open?: boolean;
  title?: string;
  onClose?: () => void;
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
      if (onClose) {
        onClose();
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
      className={modalClasses}
      onClick={clickOutside}
    >
      <div
        role="presentation"
        className={
          'modal scale-in ' +
          `bg-${color} ${open ? 'block' : 'hidden'} ` +
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
    </motion.div>
  );
}

export default Modal;
