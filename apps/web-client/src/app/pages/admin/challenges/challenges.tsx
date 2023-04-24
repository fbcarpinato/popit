import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const ChallengesList = lazy(() => import('./challengesList'));

export function Challenges() {
  return (
    <Routes>
      <Route path="/" element={<ChallengesList />} />
    </Routes>
  );
}

export default Challenges;
