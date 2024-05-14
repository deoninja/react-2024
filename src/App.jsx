import { PostContainer } from './components/PostContainer';
import { UserContext } from './utils/contexts/UserContext';

export default function App() {
  return (
    <UserContext.Provider>
      <div>
        <PostContainer />
      </div>
    </UserContext.Provider>
  );
}
