import { describe, it, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { UsernameDisplay } from '../components/UsernameDisplay';

describe('UsernameDisplay', () => {
  it('should render username', async () => {
    render(<UsernameDisplay username='DeoTheDeveloper' />);
    expect(
      await screen.findByText('DeoTheDeveloper', {}, { timeout: 10000 })
    ).toBeInTheDocument();
  });
});
