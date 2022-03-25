/**
 * This is the main layout. It is to be used anywhere that is not game
 * logic
 */

import type { FC, ReactNode } from 'react';

const LayoutMain: FC = ({ children }: { children?: ReactNode }) => (
  <>
    <h2>main layout</h2>
    {children}
  </>
);

export default LayoutMain;
