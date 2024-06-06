import { useState, useEffect } from 'react';

export function UsernameDisplay({ username }) {
  const [timerPassed, setTimerPassed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimerPassed(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <span>{timerPassed && username}</span>
    </div>
  );
}
