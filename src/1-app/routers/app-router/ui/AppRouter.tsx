import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from '../lib/routeConfig';
import { PageLoader } from '@/widgets';

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
        <Routes>
          {Object.values(routeConfig).map(
            ({ path, element }) => <Route key={path} path={path} element={<div className='content-page'>{element}</div>} />)}
        </Routes>
    </Suspense>
  );
};