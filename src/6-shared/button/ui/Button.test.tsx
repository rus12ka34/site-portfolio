import { renderWithTranslation } from '@/shared';
import { screen, fireEvent } from '@testing-library/react';
import { Button, ButtonView } from './Button';

describe('Button component', () => {
  test('renders button with children', () => {
    renderWithTranslation(<Button>Click me</Button>);
    const button = screen.getByRole('button');
    screen.debug();
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click me');
  });

  test('applies passed className', () => {
    renderWithTranslation(<Button className="custom-class">Test</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toMatch(/custom-class/);
  });

  test('applies view styles', () => {
    renderWithTranslation(<Button view={ButtonView.PRIMARY}>Primary</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toMatch(/primary/);
  });

  test('calls onClick handler', () => {
    const handleClick = jest.fn();
    renderWithTranslation(<Button onClick={handleClick}>Click</Button>);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('passes additional props', () => {
    renderWithTranslation(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});