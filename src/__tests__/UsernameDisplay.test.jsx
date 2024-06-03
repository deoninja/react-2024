import { describe, it, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { UsernameDisplay } from '../components/UsernameDisplay';

describe('UsernameDisplay', () => {
  it('should render username', () => {
    const result = render(<UsernameDisplay username='John' />);
    expect(result.container).toMatchSnapshot();
  });
});

// describe('UsernameDisplay', () => {
//   it('should render the username', () => {
//     render(<UsernameDisplay username='John' />);
//     const usernameDisplay = screen.getByText('John');
//     expect(usernameDisplay).toBeInTheDocument();
//   });
// });
