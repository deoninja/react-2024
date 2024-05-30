import { useEffect, useState } from 'react';
import { UserContext } from './utils/contexts/UserContext';
import { PostContainer } from './components/PostContainer';
import { PostContentButtons } from './components/PostContentButtons';
import { useFetchUser } from './utils/hooks/useFetchUser';
import { Outlet, Link } from 'react-router-dom';

export default function App() {
  const { user, loading, error } = useFetchUser(2);

  // console.log(user, loading, error);

  const [userData, setUserData] = useState();

  useEffect(() => {
    if (!loading && !error && user) setUserData(user);
  }, [loading, error, user]);

  console.log(loading);
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
          <li>
            <Link to='/blog-post'>Blog</Link>
          </li>
        </ul>
      </nav>
      <UserContext.Provider value={{ ...userData, setUserData }}>
        <div>{loading ? 'Loading...' : <PostContainer />}</div>
      </UserContext.Provider>
      <Outlet />
    </>
  );
}
