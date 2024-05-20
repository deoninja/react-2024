import { PostContent } from './PostContent';
import { useContext, useState } from 'react';
import { UserContext } from '../utils/contexts/UserContext';

export function PostContainer() {
  const [data, setData] = useState('Hello World!');
  const userContextData = useContext(UserContext);

  return (
    <div>
      <div>
        <span>Post Container</span>
      </div>
      <div>{userContextData.name}</div>
      <div>{userContextData.id}</div>
      <div>{userContextData.email}</div>
      <div>{userContextData.username}</div>
      <PostContent data={data} />
    </div>
  );
}
