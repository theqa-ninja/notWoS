import classnames from 'classnames';

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
  return <span className={classes}>{letter}</span>;
}

export default WosBlock;
