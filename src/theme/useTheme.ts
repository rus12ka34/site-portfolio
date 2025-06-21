import { useState } from 'react';
import { Theme } from './ThemeContext';

export interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
};

export function useTheme(): UseThemeResult {
  const [ theme, setTheme ] = useState(localStorage.getItem('theme') as Theme || Theme.LIGHT);

  const toggleTheme = () => {
    const _theme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(_theme);
    localStorage.setItem('theme', _theme);
  };

  return { theme, toggleTheme };
}