import { HTMLMotionProps } from 'framer-motion';
import { DOMMotionComponents } from 'framer-motion/types/render/dom/types';

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement,
    HTMLMotionProps
  > {
  popup?: boolean;
  kind?: 'outline' | 'solid';
  color?: Color;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  iconOnly?: boolean;
  className?: string;
}

/**
 * @param text - the text to copy to clipboard
 * @param onFailure - dispatch when copy to clipboard fails
 * @param onSuccess - dispatch when copy to clipboard succeeds
 */
export interface CopyButtonProps extends ButtonProps {
  text: string;
  onFailure?: () => void;
  onSuccess?: () => void;
}
