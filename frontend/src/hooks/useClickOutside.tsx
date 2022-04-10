import { useState, useEffect, RefObject } from 'react';

function useClickOutside<T extends HTMLElement>(ref: RefObject<T>) {
  const [clickedOutside, setClickedOutside] = useState<boolean>(false);

  useEffect(() => {
    function onClickOutside(event): void {
      if (ref.current && !ref.current.contains(event.target)) {
        setClickedOutside(true);
      } else {
        setClickedOutside(false);
      }
    }

    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, [ref]);

  return clickedOutside;
}

export default useClickOutside;
