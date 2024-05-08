import propTypes from 'prop-types';
import { useState } from 'react';

export function UserDetails({ user, setUsers }) {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  return (
    <div>
      <div>
        <button onClick={() => setIsEditing((currentState) => !currentState)}>
          Edit
        </button>
        <button>Delete</button>
        {isEditing && (
          <button
            onClick={() => {
              setUsers((currentUsersState) => {
                return currentUsersState.map((currentUser) =>
                  currentUser.id === user.id
                    ? { ...currentUser, username, email }
                    : currentUser
                );
              });

              setIsEditing(false);
            }}
          >
            Save
          </button>
        )}
      </div>
      <div>
        <b>ID:</b>
        <br />
        <b>Username:</b>
        {isEditing ? (
          <input
            name='username'
            id='username'
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        ) : (
          <span>{user.username}</span>
        )}
        <br />
        <b>Email:</b>
        {isEditing ? (
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        ) : (
          <span>{user.email}</span>
        )}
      </div>
    </div>
  );
}

UserDetails.propTypes = {
  user: propTypes.shape({
    id: propTypes.number.isRequired,
    username: propTypes.string.isRequired,
    email: propTypes.string.isRequired,
  }).isRequired,
  setUsers: propTypes.func.isRequired,
};
