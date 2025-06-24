import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from '../lib/routeConfig';

export const AppRouter = () => {
  const { t } = useTranslation();
  
  return (
    <Suspense fallback={<>{t('loading')}...</>}>
        <Routes>
          {Object.values(routeConfig).map(
            ({ path, element }) => <Route key={path} path={path} element={<div className='content-page'>{element}</div>} />)}
        </Routes>
    </Suspense>
  );
};