import { FC } from 'react';
import { ClassNames, Loader } from '@/shared';
import cls from './PageLoader.modules.scss';

interface PageLoaderProps {
  className?: string;
};

export const PageLoader: FC<PageLoaderProps> = () => { 
  return (
    <div className={ClassNames(cls.PageLoader, {}, [])}>
      <Loader />
    </div>
  );
};