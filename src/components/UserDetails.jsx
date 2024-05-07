import propTypes from 'prop-types';

export function UserDetails({ user }) {
  return (
    <div>
      <b>
        ID: <span>{user.id}</span>
      </b>
      <br />
      <b>
        Username: <span>{user.username}</span>
      </b>
      <br />
      <b>
        Email: <span>{user.email}</span>
      </b>
    </div>
  );
}

UserDetails.propTypes = {
  user: propTypes.shape({
    id: propTypes.number,
    username: propTypes.string,
    email: propTypes.string.isRequired,
  }),
};
