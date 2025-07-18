import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from '@/shared';

import { Sidebar } from './Sidebar';


describe('Sidebar component', () => {
  test('renders sidebar', () => {
    renderWithTranslation(<Sidebar />)
    screen.debug();
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('sidebarToggle')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('sidebarToggle'));
    expect(screen.getByTestId('sidebar')).not.toHaveClass('expanded');
    fireEvent.click(screen.getByTestId('sidebarToggle'));
    expect(screen.getByTestId('sidebar')).toHaveClass('expanded');
  });
});