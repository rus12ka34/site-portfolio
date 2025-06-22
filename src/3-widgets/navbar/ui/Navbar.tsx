
import { FC } from 'react';
import { Link } from '@/shared';
import { ClassNames, LinkTheme } from '@/shared';

import cls from './Navbar.modules.scss';

interface NavbarProps {
  className?: string;
};

export const Navbar: FC<NavbarProps> = () => { 
  return (
    <div className={ClassNames(cls.Navbar, {}, [])}>
      <div>Портфолио</div>
      <div>
        <Link to='/' theme={LinkTheme.SECONDARY} >Главная</Link>
        <Link to='/about' theme={LinkTheme.PRIMARY} >О нас</Link>
      </div>
    </div>
  );
};