import Button from 'components/Button';
import { ReactNode } from 'react';
interface ModalFooterProps {
  onClose?: () => void;
  children?: ReactNode;
}

function ModalFooter({ onClose, children }: ModalFooterProps) {
  return (
    <footer className="modal-footer">
      {children ? (
        children
      ) : (
        <Button popup onClick={onClose} color="red">
          Close
        </Button>
      )}
    </footer>
  );
}

export default ModalFooter;
