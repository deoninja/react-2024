export function LoginForm() {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          //   console.log('username: ' + formData.get('username'));
          //   console.log('password: ' + formData.get('password'));
          const username = formData.get('username');
          const password = formData.get('password');
          fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          })
            .then((response) => response.json())
            .then((data) => console.log(data));
        }}
      >
        <div>
          <label htmlFor='username'>Username</label>
          <br />
          <input
            type='text'
            id='username'
            name='username'
            onChange={(e) => {
              console.log(`username: ${e.target.value}`);
              //   console.log('username changed');
            }}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <br />
          <input
            type='password'
            id='password'
            name='password'
            onChange={(e) => console.log(`password: ${e.target.value}`)}
          />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}
