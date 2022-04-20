import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGame } from 'context/GameProvider';
import Color from 'utils/Colors';

function CountdownScreen() {
  const [count, setCount] = useState<number>(3);
  const [borderColor, setBorderColor] = useState<Color>('red');
  const game = useGame();
  useEffect(() => {
    if (count < 0) {
      game.advanceScreen();
      return;
    }

    const countdown = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () => {
      clearTimeout(countdown);
    };
  });

  const changeBorderColor = () => {
    let color = Color.red;
    switch (count) {
      case 3:
        color = Color.red;
        break;
      case 2:
        color = Color.peach;
        break;
      case 1:
        color = Color.yellow;
        break;
      default:
        color = Color.green;
        break;
    }
    setBorderColor(color);
  };

  useEffect(() => {
    changeBorderColor();
  }, [count]);

  const countdownVariants = {
    fadeIn: {
      scale: [0, 1],
      transition: {
        duration: 0.3,
        repeat: 3,
        repeatDelay: 0.7
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="countdown-container"
          initial={{
            opacity: 0,
            scale: 0,
            translateX: '-50%',
            translateY: '-50%',
            rotate: '45deg'
          }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay: 0.35 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <div className={`countdown border-${borderColor}`}>
            <motion.span
              className={`countdown-text`}
              variants={countdownVariants}
              initial={{ scale: 0, rotate: '-45deg' }}
              animate={'fadeIn'}
            >
              {count === 0 ? 'Go!' : count}
            </motion.span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default CountdownScreen;
