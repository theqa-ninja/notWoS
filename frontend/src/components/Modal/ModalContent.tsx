import { ReactNode } from 'react';
interface ModalContentProps
  extends React.DetailedHTMLProps<
    React.HtmlHTMLAttributes<HTMLHtmlElement>,
    HTMLHtmlElement
  > {
  children?: ReactNode;
}

function ModalContent({ children, className, ...rest }: ModalContentProps) {
  return (
    <main className={`modal-main ${className}`} {...rest}>
      {children}
    </main>
  );
}

export default ModalContent;
