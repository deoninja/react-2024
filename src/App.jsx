import { useEffect, useState } from 'react';
import { UserContext } from './utils/contexts/UserContext';
import { PostContainer } from './components/PostContainer';
import { PostContentButtons } from './components/PostContentButtons';
import { useFetchUser } from './utils/hooks/useFetchUser';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { UserDetails } from './components/UserDetails';

export default function App() {
  const { user, loading, error } = useFetchUser(2);

  // console.log(user, loading, error);

  // const [userData, setUserData] = useState();

  // const navigate = useNavigate();

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'johndoe',
      email: 'l3X2k@example.com',
    },
  ]);

  // useEffect(() => {
  //   if (!loading && !error && user) setUserData(user);
  //   // navigate('/users');
  // }, [loading, error, user]);

  return (
    <>
      {users.map((user) => (
        <UserDetails key={user.id} user={user} setUsers={setUsers} />
      ))}
      {/* <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
          <li>
            <Link to='/blog-posts'>Blog</Link>
          </li>
        </ul>
      </nav>

      <div>
        <label htmlFor='data'>Enter data</label>
        <input
          type='text'
          id='data'
          onChange={(e) => {
            if (e.target.value.length > 10) {
              navigate('/blog-posts', {
                state: {
                  posts: [
                    {
                      id: 1,
                      title: 'Hello world!',
                      content: 'Welcome to my first post!',
                    },
                  ],
                },
              });
            }
          }}
        />
      </div>

      <UserContext.Provider value={{ ...userData, setUserData }}>
        <div>{loading ? 'Loading...' : <PostContainer />}</div>
      </UserContext.Provider> */}
      <Outlet />
    </>
  );
}
