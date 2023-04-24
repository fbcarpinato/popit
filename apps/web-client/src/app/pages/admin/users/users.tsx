import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const UsersList = lazy(() => import('./usersList'));

export function Users() {
  return (
    <Routes>
      <Route path="/" element={<UsersList />} />
    </Routes>
  );
}

export default Users;
