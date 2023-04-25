import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import EditChallenge from './editChallenge';

describe('EditChallenge', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <EditChallenge />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
