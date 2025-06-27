import { lazy } from 'react';

export const MainPageAsync = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./Main') as never)
    }, 1000);
  })
);