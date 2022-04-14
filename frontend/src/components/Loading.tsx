import { motion, AnimatePresence } from 'framer-motion';

function Loading({ className }: { className?: string }) {
  const container = {
    init: {
      scale: 1
    },
    wnos: {
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
        <section className="flex justify-center items-center !rounded-full border-4 border-yellow modal">
          <AnimatePresence>
            <motion.ul
              className="flex gap-4 text-white"
              variants={container}
              initial="init"
              animate="wnos"
            >
              <motion.li variants={item} className="text-6xl uppercase">
                w
              </motion.li>
              <motion.li variants={item} className="text-6xl uppercase">
                n
              </motion.li>
              <motion.li variants={item} className="text-6xl uppercase">
                o
              </motion.li>
              <motion.li variants={item} className="text-6xl uppercase">
                s
              </motion.li>
            </motion.ul>
          </AnimatePresence>
        </section>
      </main>
    </>
  );
}

export default Loading;
