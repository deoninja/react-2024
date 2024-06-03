import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import UsernameDisplay from '../components/UsernameDisplay';

describe('UsernameDisplay', () => {
  it('should render the username', () => {
    render(<UsernameDisplay username='John' />);
    const usernameDisplay = screen.getByText('John');
    expect(usernameDisplay).toBeInTheDocument();
  });
});
