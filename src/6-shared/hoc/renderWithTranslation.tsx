import { I18nextProvider } from 'react-i18next';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import i18n from '../config/i18n/i18nForTest';


export const renderWithTranslation = (component: ReactNode) => {
  return render(
    <MemoryRouter>
      <I18nextProvider i18n={i18n} >
        {component}
      </I18nextProvider>
    </MemoryRouter>
  )
}