import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import Dashboard from './dashboard';

describe('Dashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
