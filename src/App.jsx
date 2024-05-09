import { useState, useEffect } from 'react';
export default function App() {
  const [counter, setCounter] = useState(0);
  const [sync, setSync] = useState(false);

  useEffect(() => {
    console.log('Rendering...');
    document.title = 'React Tutorials ' + counter;
  }, [sync]);

  return (
    <div>
      You click the button {counter} times <br />
      <button onClick={() => setCounter((count) => count + 1)}>Click Me</button>
      <button onClick={() => setSync((current) => !current)}>Sync</button>
      <br />
    </div>
  );
}
