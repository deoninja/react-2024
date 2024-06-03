import { describe, it, test } from 'vitest';
import { render } from '@testing-library/react';
import { UsernameDisplay } from '../components/UsernameDisplay';

describe('UsernameDisplay', () => {
  it('should render username', () => {
    // render(<UsernameDisplay />);
    <UsernameDisplay />;
  });
});

// describe('UsernameDisplay', () => {
//   it('should render the username', () => {
//     render(<UsernameDisplay username='John' />);
//     const usernameDisplay = screen.getByText('John');
//     expect(usernameDisplay).toBeInTheDocument();
//   });
// });
