import { FC } from 'react';
import { ClassNames } from '@/shared';
import cls from './Loader.modules.scss';

interface LoaderProps {
  className?: string;
};

export const Loader: FC<LoaderProps> = () => { 
  return (
    <span className={ClassNames(cls.Loader, {}, [])}></span>
  );
};