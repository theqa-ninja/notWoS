import classnames from 'classnames';

/**
 * NOTE: A letter can be fake AND hidden
 * TODO: figure out logic to render fakes as hidden until revealed
 */

interface WnosBlockProps {
  letter: string;
  hidden?: boolean;
  fake?: boolean;
}

function WnosBlock({ letter, hidden, fake }: WnosBlockProps) {
  const classes = classnames('wnos-block', {
    'wnos-block--hidden': hidden,
    'wnos-block--fake': fake && !hidden
  });
  return (
    <span id={letter} className={classes}>
      {hidden ? '?' : letter}
    </span>
  );
}

export default WnosBlock;
