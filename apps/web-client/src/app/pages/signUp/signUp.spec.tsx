import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import SignUp from './signUp';

describe('SignUp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
