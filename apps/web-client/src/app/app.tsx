import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/userContext';

const Login = lazy(() => import('./pages/login/login'));
const SignUp = lazy(() => import('./pages/signUp/signUp'));
const Admin = lazy(() => import('./pages/admin/admin'));

export function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <UserProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      </UserProvider>
    </Suspense>
  );
}

export default App;
