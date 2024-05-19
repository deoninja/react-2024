import { useContext } from 'react';
import { PostContentButtons } from './PostContentButtons';
import { UserContext } from '../utils/contexts/UserContext';

export function PostContent({ data }) {
  const userContextData = useContext(UserContext);

  return (
    <div>
      <div>
        <span>Post Content</span>
      </div>
      <PostContentButtons />
      {userContextData.email}
    </div>
  );
}
