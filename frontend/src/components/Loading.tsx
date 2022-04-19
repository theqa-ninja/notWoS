import { motion, AnimatePresence } from 'framer-motion';

function Loading({ className }: { className?: string }) {
  const container = {
    init: {
      scale: 0,
      x: '-50%',
      y: '-50%'
    },
    wnos: {
      scale: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    init: {
      scale: 1
    },
    wnos: {
      scale: [1, 1.4, 1],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatDelay: 0.8
      }
    },
    exit: {
      scale: 1
    }
  };
  return (
    <>
      <main className={`modal-overlay ${className && className}`}>
        <AnimatePresence>
          <motion.ul
            className="flex gap-4 text-white loading"
            variants={container}
            initial="init"
            animate="wnos"
          >
            <motion.li variants={item} className="loading-char">
              w
            </motion.li>
            <motion.li variants={item} className="loading-char">
              n
            </motion.li>
            <motion.li variants={item} className="loading-char">
              o
            </motion.li>
            <motion.li variants={item} className="loading-char">
              s
            </motion.li>
          </motion.ul>
        </AnimatePresence>
      </main>
    </>
  );
}

export default Loading;
