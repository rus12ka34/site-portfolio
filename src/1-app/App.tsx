import { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { MainPage, AboutPage } from '@/pages';
import { ClassNames, useTheme } from '@/shared';

import './styles/index.scss';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={ClassNames('App', {}, [theme])}>
      <Link to='/' className='link' >Главная</Link>
      <Link to='/about' className='link' >О нас</Link>
      <button onClick={toggleTheme} >Сменить тему</button>
      <Suspense fallback={<>Загрузка...</>}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};