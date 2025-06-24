
import { AppRouter } from './routers/app-router/ui/AppRouter';
import { ClassNames, useTheme } from '@/shared';
import { Navbar, Sidebar } from '@/widgets';

import './styles/index.scss';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={ClassNames('App', {}, [theme])}>
      <Navbar />
      <div className='container'>
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};