import { FC, useMemo } from 'react';
import { ThemeContext } from '@/app';
import { useTheme } from '@/shared';

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