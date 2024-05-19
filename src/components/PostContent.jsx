import { useContext } from 'react';
import { UserContext } from '../utils/contexts/UserContext';

export function PostContent() {
  const userContextData = useContext(UserContext);

  return <div>{userContextData.email}</div>;
}
