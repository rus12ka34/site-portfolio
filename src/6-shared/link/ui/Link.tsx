import { FC } from 'react';
import { Link as _Link, LinkProps as _LinkProps } from 'react-router-dom';
import { ClassNames } from '@/shared';

import cls from './Link.modules.scss'

export enum LinkTheme {
  SECONDARY = 'secondary',
  PRIMARY = 'primary'
}; 

interface LinkProps extends _LinkProps {
  className?: string;
  theme?: LinkTheme;
}

export const Link: FC<LinkProps> = (props) => {
  const { to, className, theme = LinkTheme.SECONDARY, children, ...rest } = props;
  
  return <_Link to={to} className={ClassNames(cls.Link, {}, [className, cls[theme]])} {...rest} >{children}</_Link>;
};