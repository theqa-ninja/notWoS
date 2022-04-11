import classnames from 'classnames';
interface WnosGuessBlockProps {
  length: number;
  hidden: boolean;
  letter: string;
}

function WnosGuessBlock({ length, hidden, letter }: WnosGuessBlockProps) {
  const classes = classnames('wnos-guess-block', {
    'wnos-guess-block--lavender': length === 4,
    'wnos-guess-block--teal': length === 5,
    'wnos-guess-block--maroon': length === 6,
    'wnos-guess-block--green': length === 7,
    'wnos-guess-block--yellow': length === 8,
    'wnos-guess-block--blue': length === 9,
    'wnos-guess-block--mauve': length === 10,
    'wnos-guess-block--pink': length === 11,
    'wnos-guess-block--peach': length === 12
  });
  return <li className={classes}>{hidden ? '?' : letter}</li>;
}

export default WnosGuessBlock;
