import { UserProfile } from './components/UserProfile';

export default function App() {
  const callMe = () => {
    console.log('hello');
  };
  return (
    <div>
      <UserProfile
        age={25}
        isLoggedIn={false}
        favoriteFoods={[
          { name: 'Sushi' },
          { name: 'Pizza' },
          { name: 'Adobo' },
        ]}
        callMe={callMe}
      />
    </div>
  );
}
