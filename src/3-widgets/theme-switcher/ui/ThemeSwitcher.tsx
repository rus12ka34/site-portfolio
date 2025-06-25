import { FC } from 'react';
import { Theme } from '@/app';
import { ClassNames, useTheme, Button, ButtonView } from '@/shared';
import Sun from '@/shared/assets/icons/sun.svg';
import Moon from '@/shared/assets/icons/moon.svg';

interface ThemeSwitcherProps {
  className?: string;
};

export const ThemeSwitcher: FC<ThemeSwitcherProps> = () => { 
  const { theme, toggleTheme } = useTheme();

  const icon = theme === Theme.LIGHT ? <Sun /> : <Moon />;
  
  return (
    <Button view={ButtonView.CLEAR} onClick={toggleTheme} className={ClassNames('', {}, [])}>{icon}</Button>
  );
};