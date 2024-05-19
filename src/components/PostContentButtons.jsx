import { useContext } from 'react';
import { UserContext } from '../utils/contexts/UserContext';
export function PostContentButtons() {
  const userContextData = useContext(UserContext);

  return <div>{userContextData.id}</div>;
}
