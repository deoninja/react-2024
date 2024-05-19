import { UserContext } from './utils/contexts/UserContext';
import { PostContainer } from './components/PostContainer';
import { PostContentButtons } from './components/PostContentButtons';

export default function App() {
  return (
    <>
      <UserContext.Provider
        value={{
          id: 1,
          username: 'Deo the dev',
          email: 'deo@dev.com',
          displayName: 'deoDev',
        }}
      >
        <div>
          <PostContainer />
        </div>
      </UserContext.Provider>
      <PostContentButtons />
    </>
  );
}
