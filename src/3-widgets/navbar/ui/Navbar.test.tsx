import { renderWithTranslation } from '@/shared';
import { screen } from '@testing-library/react';
import { Navbar } from './Navbar';

describe('Navbar component', () => {
  test('renders navbar', () => {
    renderWithTranslation(<Navbar />);
    screen.debug();
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });
});