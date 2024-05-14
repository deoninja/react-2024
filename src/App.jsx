import { useEffect } from 'react';
import { useState } from 'react';
import { LoginForm } from './components/LoginForm';

export default function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <button onClick={() => setToggle((currentState) => !currentState)}>
        Toggle
      </button>
      {toggle && <LoginForm />}
    </div>
  );
}
