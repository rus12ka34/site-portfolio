import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from '@/app';

export interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
};

export function useTheme(): UseThemeResult {
  const { 
    theme, 
    setTheme 
  } = useContext(ThemeContext);

  const toggleTheme = () => {
    const _theme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(_theme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, _theme);
  };

  return { theme, toggleTheme };
}