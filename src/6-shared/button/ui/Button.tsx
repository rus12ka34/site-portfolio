import { FC, ButtonHTMLAttributes } from 'react';
import { ClassNames } from '@/shared';
import cls from './Button.modules.scss';

export enum ButtonView {
  CLEAR = 'clear',
  SECONDARY = 'secondary',
  PRIMARY = 'primary'
}; 

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>  {
  className?: string;
  view?: ButtonView;
};

export const Button: FC<ButtonProps> = (props) => { 
  const { className, children, view, ...rest } = props;
  return (
    <button className={ClassNames(cls.Button, {}, [className, cls[view]])} {...rest}>{children}</button>
  );
};