import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import NewChallgen from './newChallenge';

describe('NewChallgen', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <NewChallgen />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
