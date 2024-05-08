import { useState } from 'react';
import { UserDetails } from './components/UserDetails';
export default function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [counter, setCounter] = useState(4);

  const [users, setUsers] = useState([
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newUser = {
            id: counter,
            username,
            email,
          };
          setCounter((currentCounter) => currentCounter + 1);
          setUsers((currentUsersState) => [...currentUsersState, newUser]);
          setUsername('');
          setEmail('');
        }}
      >
        <div>
          <label htmlFor='username'>Username </label>
          <input
            type='text'
            id='username'
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='email'>Email </label>
          <input
            type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button>Add User</button>
      </form>
      <br />
      {users.map((user, index) => (
        <UserDetails key={index} user={user} setUsers={setUsers} />
      ))}
    </div>
  );
}
