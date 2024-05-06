import { UserProfile } from './components/UserProfile';

export default function App() {
  const callMe = () => {
    console.log('hello');
  };
  return (
    <div>
      <UserProfile
        username='deo'
        age={25}
        isLoggedIn={false}
        favoriteFoods={[
          { name: 'Sushi', id: 'sushi' },
          { name: 'Pizza', id: 'pizza' },
        ]}
        callMe={callMe}
      />
    </div>
  );
}
