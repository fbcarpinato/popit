import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const ChallengesList = lazy(() => import('./challengesList'));
const NewChallenge = lazy(() => import('./newChallenge'));
const EditChallenge = lazy(() => import('./editChallenge'));

export function Challenges() {
  return (
    <Routes>
      <Route path="/" element={<ChallengesList />} />
      <Route path="/new" element={<NewChallenge />} />
      <Route path="/:id" element={<EditChallenge />} />
    </Routes>
  );
}

export default Challenges;
