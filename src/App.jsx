import { UserDetails } from './components/UserDetails';

export default function App() {
  const mockUsers = [
    {
      id: 1,
      username: 'User 1',
      email: '5uJt9@example.com',
    },
    {
      id: 2,
      username: 'User 2',
      email: '5uJt91@example',
    },
  ];

  return (
    <div>
      {mockUsers.map((user) => {
        return <UserDetails key={user.id} user={user} />;
      })}
    </div>
  );
}
