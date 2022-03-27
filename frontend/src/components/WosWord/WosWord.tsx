import { ReactNode } from 'react';
function WosWord({ children }: { children: ReactNode }) {
  return <div className="wos-word">{children}</div>;
}

export default WosWord;
