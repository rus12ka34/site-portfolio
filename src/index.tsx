import { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App, ThemeProvider } from '@/app';

import '@/shared/config/i18n/i18n';

render(
  <BrowserRouter>
    <ThemeProvider>
      <Suspense fallback="loading">
        <App />
      </Suspense>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);