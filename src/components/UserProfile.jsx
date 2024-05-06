import propTypes from 'prop-types';
import { UserFavoriteFoods } from './UserFavoriteFoods';
import { UserUsername } from './UserUsername';
export function UserProfile(props) {
  console.log(props);
  props.callMe();
  return (
    <>
      <b>Age: </b>
      <span>{props.age}</span>
      <>
        <UserUsername username={props.username} />
        <UserFavoriteFoods />
      </>
    </>
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
