import { FC } from 'react';
import { ClassNames } from '@/shared';
import { ThemeSwitcher, LangSwitcher } from '@/widgets';

import cls from './SidebarFooter.modules.scss';

interface SidebarFooterProps {
  className?: string;
};

export const SidebarFooter: FC<SidebarFooterProps> = () => { 
  return (
    <div className={ClassNames(cls.SidebarFooter, {}, [])}>
      <ThemeSwitcher />
      <LangSwitcher />
    </div>
  );
};