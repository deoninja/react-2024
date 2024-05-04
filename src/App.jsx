import { UserProfile } from './components/UserProfile';

export default function App() {
  return (
    <div>
      <UserProfile age={25} isLoggedIn={false} />
    </div>
  );
}
