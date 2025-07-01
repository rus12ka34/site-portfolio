import { FC } from 'react';
import { Button, ClassNames } from '@/shared';
import { useTranslation } from 'react-i18next';

import cls from './PageError.modules.scss';

interface PageErrorProps {
  className?: string;
};

export const PageError: FC<PageErrorProps> = () => { 
  const { t } = useTranslation();

  const reload = () => location.reload();
  
  return (
    <div className={ClassNames(cls.PageError, {}, [])}>
      <div> 
        <h1>{t('Произошла ошибка')}</h1>
        <Button onClick={reload}>{t('Перезагрузить станицу')}</Button>
      </div>
    </div>
  );
};