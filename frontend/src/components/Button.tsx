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
  onClick,
  children,
  ...rest
}: ButtonProps): JSX.Element {
  const btnTextClasses = classnames('btn', {
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
    'btn-outline': kind === 'outline'
  });

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
