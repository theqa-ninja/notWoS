/**
 * This is the main layout. It is to be used anywhere that is not game
 * logic
 */

import type { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

const LayoutMain: FC = ({ children }: { children?: ReactNode }) => (
  <>
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col grow justify-center items-center p-4"
    >
      {children}
    </motion.main>
  </>
);

export default LayoutMain;
