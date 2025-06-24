
import { FC } from 'react';
import { Link } from '@/shared';
import { ClassNames, LinkTheme } from '@/shared';
import { useTranslation } from 'react-i18next';

import cls from './Navbar.modules.scss';

interface NavbarProps {
  className?: string;
};

export const Navbar: FC<NavbarProps> = () => { 
  const { t } = useTranslation();

  return (
    <div className={ClassNames(cls.Navbar, {}, [])}>
      <div>
        {t('siteTitle')}
      </div>
     
      <div>
        <Link to='/' theme={LinkTheme.SECONDARY} >{t('pages.main')}</Link>
        <Link to='/about' theme={LinkTheme.PRIMARY} >{t('pages.about')}</Link>
      </div>
    </div>
  );
};