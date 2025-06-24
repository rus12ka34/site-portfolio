import { FC, useState } from 'react';
import { Button, ClassNames } from '@/shared';
import { SidebarFooter } from '../SidebarFooter/SidebarFooter';

import cls from './Sidebar.modules.scss';


interface SidebarProps {
  className?: string;
};

export const Sidebar: FC<SidebarProps> = () => { 
  const [ isExpanded, setExpanded ] = useState(true);

  const toggleSidebar = () => setExpanded((expanded) => !expanded);

  return (
    <div className={ClassNames(cls.Sidebar, {[cls.expanded]: isExpanded}, [])}>
      <Button onClick={toggleSidebar}>Toggle</Button>
      <SidebarFooter />
    </div>
  );
};