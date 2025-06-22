
import { AppRouter } from './routers/app-router/ui/AppRouter';
import { ClassNames, useTheme } from '@/shared';
import { Navbar } from '@/widgets';

import './styles/index.scss';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={ClassNames('App', {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme} >Сменить тему</button>
      <AppRouter />
    </div>
  );
};