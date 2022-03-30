import classnames from 'classnames';
interface WosGuessBlockProps {
  length: number;
  hidden: boolean;
  letter: string;
}

function WosGuessBlock({ length, hidden, letter }: WosGuessBlockProps) {
  const classes = classnames('wos-guess-block', {
    'wos-guess-block--lavender': length === 4,
    'wos-guess-block--teal': length === 5,
    'wos-guess-block--maroon': length === 6,
    'wos-guess-block--green': length === 7,
    'wos-guess-block--yellow': length === 8,
    'wos-guess-block--blue': length === 9,
    'wos-guess-block--mauve': length === 10,
    'wos-guess-block--pink': length === 11,
    'wos-guess-block--peach': length === 12
  });
  return <li className={classes}>{hidden ? '?' : letter}</li>;
}

export default WosGuessBlock;
