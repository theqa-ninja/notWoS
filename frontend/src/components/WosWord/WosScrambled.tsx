import { ReactNode } from 'react';
function WosScrambled({ children }: { children: ReactNode }) {
  return <div className="wos-word">{children}</div>;
}

export default WosScrambled;
