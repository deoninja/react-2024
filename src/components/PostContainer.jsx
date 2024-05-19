import { PostContent } from './PostContent';
import { useContext, useState } from 'react';
import { UserContext } from '../utils/contexts/UserContext';

export function PostContainer() {
  const [data, setData] = useState('Hello World!');
  const userContextData = useContext(UserContext);

  return (
    <div>
      <div>{userContextData.displayName}</div>
    </div>
  );
}
