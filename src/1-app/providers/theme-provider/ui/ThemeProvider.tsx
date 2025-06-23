import { FC, useMemo, useState } from 'react';
import { ThemeContext, LOCAL_STORAGE_THEME_KEY, Theme } from '@/app';

export const ThemeProvider: FC = ({ children }) => {
  const [ theme, setTheme ] = useState(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT);

  const value = useMemo(() => {
    return {
      theme,
      setTheme
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}