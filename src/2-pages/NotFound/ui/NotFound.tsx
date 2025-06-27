import { FC } from 'react';
import { ClassNames } from '@/shared';
import cls from './NotFound.modules.scss';

interface NotFoundProps {
  className?: string;
};

export const NotFound: FC<NotFoundProps> = () => { 
  return (
    <div className={ClassNames(cls.NotFound, {}, [])}>
      404
    </div>
  );
};