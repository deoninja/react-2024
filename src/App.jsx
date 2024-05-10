import { useState, useEffect } from 'react';
export default function App() {
  const [counter, setCounter] = useState(0);
  const [sync, setSync] = useState(false);

  useEffect(() => {
    console.log('Rendering...');
    document.title = 'React Tutorials ' + counter;
  }, [sync]);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users', {
  //     method: 'GET',
  //   }).then((response) => {
  //     return response
  //       .json()
  //       .then((data) => {
  //         console.log(data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         console.log(err.message);
  //       });
  //   });
  // });

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users',
          {
            method: 'GET',
          }
        );
        const json = await response.json();
        console.log(json);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
  });

  return (
    <div>
      You click the button {counter} times <br />
      <button onClick={() => setCounter((count) => count + 1)}>Click Me</button>
      <button onClick={() => setSync((current) => !current)}>Sync</button>
      <br />
    </div>
  );
}
