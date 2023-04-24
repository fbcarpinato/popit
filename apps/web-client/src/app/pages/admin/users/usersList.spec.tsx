import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import UsersList from './usersList';

describe('UsersList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <UsersList />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
