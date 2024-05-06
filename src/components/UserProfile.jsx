import propTypes from 'prop-types';
import { UserFavoriteFoods } from './UserFavoriteFoods';
import { UserUsername } from './UserUsername';
export function UserProfile(props) {
  console.log(props);
  props.callMe();
  return (
    <div id='user-profile'>
      <UserUsername username={props.username} />
      <b>Age: </b>
      <span>{props.age}</span>
      <UserFavoriteFoods />
    </div>
  );
}

UserProfile.propTypes = {
  username: propTypes.string.isRequired,
  age: propTypes.number.isRequired,
  callMe: propTypes.func.isRequired,
  isLoggedIn: propTypes.bool,
  favoriteFoods: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      id: propTypes.string.isRequired,
    })
  ),
};
