/**
 * This is the main layout. It is to be used anywhere that is not game
 * logic
 */

import type { FC, ReactNode } from 'react';

const LayoutMain: FC = ({ children }: { children?: ReactNode }) => (
  <>
    <main className="flex flex-col grow justify-center items-center p-4">
      {children}
    </main>
  </>
);

export default LayoutMain;
