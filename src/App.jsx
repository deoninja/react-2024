import { useState } from 'react';
import { UserDetails } from './components/UserDetails';
export default function App() {
  const [users, steUsers] = useState([
    {
      id: 1,
      username: 'test',
      email: 'test@gmali.com',
    },
    {
      id: 2,
      username: 'test2',
      email: 'test2@gmali.com',
    },
    {
      id: 3,
      username: 'test3',
      email: 'test3@gmali.com',
    },
  ]);
  return (
    <div>
      {users.map((user) => (
        <UserDetails key={user.id} user={user} setUsers={steUsers} />
      ))}
    </div>
  );
}
