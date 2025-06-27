import { lazy } from 'react';

export const AboutPageAsync = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./About') as never)
    }, 1000);
  })
);