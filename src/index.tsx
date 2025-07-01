import { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App, ErrorBoundary, ThemeProvider } from '@/app';

import '@/shared/config/i18n/i18n';

render(
  <ErrorBoundary>
    <BrowserRouter>
      <ThemeProvider>
        <Suspense fallback="loading">
          <App />
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  </ErrorBoundary>,
  document.getElementById('root')
);