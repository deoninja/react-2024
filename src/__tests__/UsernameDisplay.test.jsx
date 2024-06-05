import { describe, it, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { UsernameDisplay } from '../components/UsernameDisplay';

describe('UsernameDisplay', () => {
  it('should render username', () => {
    render(<UsernameDisplay username='DeoTheDeveloper' />);
    expect(screen.queryByText('DeoTheDeveloper')).not.toBeInTheDocument();
    // expect(screen.queryByText('DeoTheDeveloper')).toBeNull();
    // let error;
    // try {
    //   screen.getByText('DeoTheDeveloper');
    // } catch (err) {
    //   error = err;
    // }
    // expect(error).toBeDefined();
    // expect(screen.getByText('DeoTheDeveloper')).toBeChecked();
    // expect(result.container).toMatchSnapshot();
    // expect(screen.getByText('Deothedev')).toBeInTheDocument();
    // const elements = screen.getAllByText('DeoTheDeveloper');
    // elements.forEach((element) => expect(element).not.toBeInTheDocument());
  });
});

// describe('UsernameDisplay', () => {
//   it('should render the username', () => {
//     render(<UsernameDisplay username='John' />);
//     const usernameDisplay = screen.getByText('John');
//     expect(usernameDisplay).toBeInTheDocument();
//   });
// });
