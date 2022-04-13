import Button from 'components/Button';
import { ReactNode } from 'react';
interface ModalFooterProps
  extends React.DetailedHTMLProps<
    React.HtmlHTMLAttributes<HTMLHtmlElement>,
    HTMLHtmlElement
  > {
  onClose?: () => void;
  children?: ReactNode;
}

function ModalFooter({
  onClose,
  children,
  className = '',
  ...rest
}: ModalFooterProps) {
  return (
    <footer className={`modal-footer ${className}`} {...rest}>
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
