import { FC, useMemo } from 'react';
import { ThemeContext } from './ThemeContext';
import { useTheme } from './useTheme';

export const ThemeProvider: FC = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  const value = useMemo(() => {
    return {
      theme,
      toggleTheme
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}