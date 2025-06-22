import { Link } from 'react-router-dom';
import { AppRouter } from './routers/app-router/ui/AppRouter';
import { ClassNames, useTheme } from '@/shared';

import './styles/index.scss';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={ClassNames('App', {}, [theme])}>
      <Link to='/' className='link' >Главная</Link>
      <Link to='/about' className='link' >О нас</Link>
      <button onClick={toggleTheme} >Сменить тему</button>
      <AppRouter />
    </div>
  );
};