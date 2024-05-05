import { UserFavoriteFoods } from './UserFavoriteFoods';
import { UserUsername } from './UserUsername';
export function UserProfile(props) {
  console.log(props);
  props.callMe();
  return (
    <div id='user-profile'>
      <UserUsername username='deo' trimmedusername='deo2' />
      <b>Age: </b>
      <span>{props.age}</span>
      <UserFavoriteFoods />
      {String(props.isLoggedIn)}
    </div>
  );
}
