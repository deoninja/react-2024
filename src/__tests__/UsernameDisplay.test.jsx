import { describe, it, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { UsernameDisplay } from '../components/UsernameDisplay';

describe('UsernameDisplay', () => {
  it('should render username', () => {
    const result = render(<UsernameDisplay username='DeoTheDeveloper' />);
    // expect(result.container).toMatchSnapshot();
    // expect(screen.getByText('Deothedev')).toBeInTheDocument();
    const elements = screen.getAllByText('DeoTheDeveloper');
    elements.forEach((element) => expect(element).not.toBeInTheDocument());
  });
});

// describe('UsernameDisplay', () => {
//   it('should render the username', () => {
//     render(<UsernameDisplay username='John' />);
//     const usernameDisplay = screen.getByText('John');
//     expect(usernameDisplay).toBeInTheDocument();
//   });
// });
