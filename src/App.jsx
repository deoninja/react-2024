import { useState } from 'react';
import { UserContext } from './utils/contexts/UserContext';
import { PostContainer } from './components/PostContainer';
import { PostContentButtons } from './components/PostContentButtons';

export default function App() {
  const [userData, setUserData] = useState({
    id: 1,
    username: 'Deo the dev',
    email: 'deo@dev.com',
    displayName: 'deoDev',
  });
  return (
    <>
      <UserContext.Provider value={{ ...userData, setUserData }}>
        <div>
          <PostContainer />
        </div>
      </UserContext.Provider>
    </>
  );
}
