import classnames from 'classnames';
import Colors from 'utils/Colors';
import { ButtonProps } from 'types/Button';
import { motion } from 'framer-motion';

function Button({
  size = 'sm',
  popup = false,
  color = 'teal',
  kind = 'solid',
  iconOnly = false,
  className,
  onClick,
  children,
  ...rest
}: ButtonProps): JSX.Element {
  const btnTextClasses = classnames(
    [
      `btn ${kind === 'outline' && 'btn-outline'}`,
      `${kind === 'outline' && `border-${color}`}`
    ].join(' '),
    {
      'btn-icon': iconOnly,
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
      'bg-white': color === Colors.white,
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
      '!text-lavender': kind === 'outline' && color === Colors.lavender,
      '!text-white': kind === 'outline' && color === Colors.white,
      'text-lg': size === 'sm',
      'text-xl': size === 'md',
      'text-2xl': size === 'lg'
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
    'border-lavender': color === Colors.lavender,
    'border-white': color === Colors.white
  });

  return popup ? (
    <div className={'btn-wrappper' + ' ' + className}>
      <button {...rest} className="btn-popup" onClick={onClick}>
        <div className={btnTextClasses}>{children}</div>
        <div aria-hidden="true" className={btnShadowClasses}></div>
      </button>
    </div>
  ) : (
    <motion.button
      whileTap={{
        scale: 0.8
      }}
      transition={{
        duration: 0.1,
        type: 'easeIn'
      }}
      {...rest}
      onClick={onClick}
      className={`${btnTextClasses} ${className}`}
    >
      {children}
    </motion.button>
  );
}

export default Button;
