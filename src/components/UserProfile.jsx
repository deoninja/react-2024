import { UserFavoriteFoods } from './UserFavoriteFoods';
export function UserProfile() {
  return (
    <div id='user-profile'>
      <p>Username: Bob</p>
      <div>
        <span>Email: </span>
        <span>deo@gmali.com</span>
      </div>
      <UserFavoriteFoods />
    </div>
  );
}
