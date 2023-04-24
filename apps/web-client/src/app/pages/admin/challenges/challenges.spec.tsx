import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import Challenges from './challenges';

describe('Challenges', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <Challenges />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
