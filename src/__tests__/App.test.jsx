import { expect, it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('should render users', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it('should render save button when edit is clicked', () => {
    render(<App />);
    screen.getByRole('button', { name: 'Edit' });
  });
});
