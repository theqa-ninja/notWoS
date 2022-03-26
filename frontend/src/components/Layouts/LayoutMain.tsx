/**
 * This is the main layout. It is to be used anywhere that is not game
 * logic
 */

import type { FC, ReactNode } from 'react';
import Navbar from 'components/Navbar/Navbar';

const LayoutMain: FC = ({ children }: { children?: ReactNode }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default LayoutMain;
