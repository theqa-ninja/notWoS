import classnames from 'classnames';
import Colors from 'utils/Colors';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  popup?: boolean;
  kind?: 'outline' | 'solid';
  color?: Color;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}

function Button({
  popup = false,
  color = 'teal',
  kind = 'solid',
  className,
  onClick,
  children,
  ...rest
}: ButtonProps): JSX.Element {
  const btnTextClasses = classnames(
    [
      `btn ${kind === 'outline' && 'btn-outline'}`,
      `${kind === 'outline' && `border-${color}`}`,
      className
    ].join(' '),
    {
      'bg-maroon': color === Colors.maroon,
      'bg-red': color === Colors.red,
      'bg-rosewater': color === Colors.rosewater,
      'bg-flamingo': color === Colors.flamingo,
      'bg-mauve': color === Colors.mauve,
      'bg-pink': color === Colors.pink,
      'bg-peach': color === Colors.peach,
      'bg-yellow': color === Colors.yellow,
      'bg-green': color === Colors.green,
      'bg-teal': color === Colors.teal,
      'bg-blue': color === Colors.blue,
      'bg-sky': color === Colors.sky,
      'bg-lavender': color === Colors.lavender,
      '!text-maroon': kind === 'outline' && color === Colors.maroon,
      '!text-red': kind === 'outline' && color === Colors.red,
      '!text-rosewater': kind === 'outline' && color === Colors.rosewater,
      '!text-flamingo': kind === 'outline' && color === Colors.flamingo,
      '!text-mauve': kind === 'outline' && color === Colors.mauve,
      '!text-pink': kind === 'outline' && color === Colors.pink,
      '!text-peach': kind === 'outline' && color === Colors.peach,
      '!text-yellow': kind === 'outline' && color === Colors.yellow,
      '!text-green': kind === 'outline' && color === Colors.green,
      '!text-teal': kind === 'outline' && color === Colors.teal,
      '!text-blue': kind === 'outline' && color === Colors.blue,
      '!text-sky': kind === 'outline' && color === Colors.sky,
      '!text-lavender': kind === 'outline' && color === Colors.lavender
    }
  );

  const btnShadowClasses = classnames('btn-shadow', {
    'border-maroon': color === Colors.maroon,
    'border-red': color === Colors.red,
    'border-rosewater': color === Colors.rosewater,
    'border-flamingo': color === Colors.flamingo,
    'border-mauve': color === Colors.mauve,
    'border-pink': color === Colors.pink,
    'border-peach': color === Colors.peach,
    'border-yellow': color === Colors.yellow,
    'border-green': color === Colors.green,
    'border-teal': color === Colors.teal,
    'border-blue': color === Colors.blue,
    'border-sky': color === Colors.sky,
    'border-lavender': color === Colors.lavender
  });

  return popup ? (
    <div className="btn-wrappper">
      <button {...rest} className="btn-popup" onClick={onClick}>
        <div className={btnTextClasses}>{children}</div>
        <div aria-hidden="true" className={btnShadowClasses}></div>
      </button>
    </div>
  ) : (
    <button {...rest} onClick={onClick} className={btnTextClasses}>
      {children}
    </button>
  );
}

export default Button;
