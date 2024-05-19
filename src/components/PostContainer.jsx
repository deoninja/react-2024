import { PostContent } from './PostContent';
import { useContext, useState } from 'react';
import { UserContext } from '../utils/contexts/UserContext';

export function PostContainer() {
  const [data, setData] = useState('Hello World!');
  const userContextData = useContext(UserContext);

  console.log(userContextData);

  return (
    <div>
      <div>
        <span>Post Container</span>
      </div>
      <div>{userContextData.displayName}</div>
      <br />
      <PostContent data={data} />
    </div>
  );
}
