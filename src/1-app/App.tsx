
import { AppRouter } from './routers/app-router/ui/AppRouter';
import { ClassNames, useTheme } from '@/shared';
import { Navbar } from '@/widgets';

import './styles/index.scss';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={ClassNames('App', {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};