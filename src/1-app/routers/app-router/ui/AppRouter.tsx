import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from '../lib/routeConfig';

export const AppRouter = () => {
  return (
    <Suspense fallback={<>Загрузка...</>}>
        <Routes>
          {Object.values(routeConfig).map(
            ({ path, element }) => <Route key={path} path={path} element={element} />
          )}
        </Routes>
    </Suspense>
  );
};