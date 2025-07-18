import { FC, useState } from 'react';
import { Button, ClassNames } from '@/shared';
import { useTranslation } from 'react-i18next';
import { SidebarFooter } from '../SidebarFooter/SidebarFooter';

import cls from './Sidebar.modules.scss';

interface SidebarProps {
  className?: string;
};

export const Sidebar: FC<SidebarProps> = () => { 
  const [ isExpanded, setExpanded ] = useState(true);
  const { t } = useTranslation();

  const toggleSidebar = () => setExpanded((expanded) => !expanded);

  return (
    <div className={ClassNames(cls.Sidebar, {[cls.expanded]: isExpanded}, [])} data-testid='sidebar'>
      <Button data-testid='sidebarToggle' onClick={toggleSidebar}>{t('sidebarToggle')}</Button>
      <SidebarFooter />
    </div>
  );
};