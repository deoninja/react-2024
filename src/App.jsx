export default function App() {
  // const isAuthenticated = true;
  // return isAuthenticated ? (
  //   <div>
  //     <h1>Welcome, User!</h1>
  //   </div>
  // ) : (
  //   <div>
  //     <h1>You are not logged in</h1>
  //   </div>
  // );

  // NOT_VERIFIED | VERIFIED | ACCOUNT_DISABLED
  const USER_STATUS = 'NOT_VERIFIED';

  switch (USER_STATUS) {
    case 'NOT_VERIFIED':
      return <div>NOT_VERIFIED</div>;
    case 'VERIFIED':
      return <div>VERIFIED</div>;
    case 'ACCOUNT_DISABLED':
      return <div>ACCOUNT_DISABLED</div>;
    default:
      return <div>UNDEFINED</div>;
  }

  // if (USER_STATUS === 'NOT_VERIFIED') {
  //   return <div>NOT_VERIFIED</div>;
  // } else if (USER_STATUS === 'VERIFIED') {
  //   return <div>VERIFIED</div>;
  // } else if (USER_STATUS === 'ACCOUNT_DISABLED') {
  //   return <div>ACCOUNT_DISABLED</div>;
  // } else {
  //   return <div>UNDEFINED</div>;
  // }
}
