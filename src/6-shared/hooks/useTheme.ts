import { useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme } from '@/app';

export interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
};

export function useTheme(): UseThemeResult {
  const [ theme, setTheme ] = useState(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT);

  const toggleTheme = () => {
    const _theme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(_theme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, _theme);
  };

  return { theme, toggleTheme };
}