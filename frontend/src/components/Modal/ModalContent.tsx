import { ReactNode } from 'react';

function ModalContent({ children }: { children?: ReactNode }) {
  return <main className="modal-main">{children}</main>;
}

export default ModalContent;
