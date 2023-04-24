import { useUser } from '../../../context/userContext';

export function Dashboard() {
  const { user } = useUser();

  return <div>Welcome {user?.username}</div>;
}

export default Dashboard;
