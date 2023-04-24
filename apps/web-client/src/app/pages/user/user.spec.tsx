import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import Admin from './admin';

describe('Admin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Admin />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
