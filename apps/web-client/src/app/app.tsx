import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Login = lazy(() => import('./pages/login/login'));
const SignUp = lazy(() => import('./pages/signUp/signUp'));

export function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Suspense>
  );
}

export default App;
