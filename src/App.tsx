import { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Counter } from './components/Counter';
import { MainPageAsync } from './pages/Main/Main.async';
import { AboutPageAsync } from './pages/About/About.async';
import { ClassNames } from './helpers/class-names/ClassNames';
import { useTheme } from './theme/useTheme';

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
          <Route path='/' element={<MainPageAsync />} />
          <Route path='/about' element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
      <Counter />
    </div>
  );
};