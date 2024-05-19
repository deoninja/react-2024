import { useContext } from 'react';
import { UserContext } from '../utils/contexts/UserContext';
export function PostContentButtons() {
  const { id, setUserData } = useContext(UserContext);

  return (
    <div>
      <div>
        <span>Post Content Buttons</span>
      </div>
      {id}
      <br />
      <button
        onClick={() =>
          setUserData((currentState) => ({
            ...currentState,
            displayName: 'Updated Display Name',
          }))
        }
      >
        Click Me
      </button>
    </div>
  );
}
