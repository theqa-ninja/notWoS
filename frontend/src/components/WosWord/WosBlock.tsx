import classnames from 'classnames';

/**
 * NOTE: A letter can be fake AND hidden
 * TODO: figure out logic to render fakes as hidden until revealed
 */

interface WosBlockProps {
  letter: string;
  hidden?: boolean;
  fake?: boolean;
}

function WosBlock({ letter, hidden, fake }: WosBlockProps) {
  const classes = classnames('wos-block', {
    'wos-block--hidden': hidden,
    'wos-block--fake': fake
  });
  return (
    <span id={letter} className={classes}>
      {hidden ? '?' : letter}
    </span>
  );
}

export default WosBlock;
