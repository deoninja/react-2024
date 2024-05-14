import { PostContent } from './PostContent';
import { useState } from 'react';

export function PostContainer() {
  const [data, setData] = useState('Hello World!');
  return (
    <div>
      <PostContent data={data} />
    </div>
  );
}
