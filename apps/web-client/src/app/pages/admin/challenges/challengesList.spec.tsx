import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import ChallengesList from './challengesList';

describe('ChallengesList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <ChallengesList />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
