import { createContext, useContext, useEffect, useState } from 'react';
import { User } from '../models/user';
import axios from '../utils/axios';
import { useNavigate } from 'react-router-dom';

interface IUserContext {
  user: User | null;
  refetch: () => Promise<void>;
}

const UserContext = createContext<IUserContext>({
  user: null,
  refetch: async () => Promise.resolve(),
});

const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (async () => {
      fetchUser();
    })();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get<User>('users/me');

      setUser(response.data);
    } catch (error) {
      navigate('/login');
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        refetch: fetchUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export default UserContext;
export { UserProvider, useUser };
