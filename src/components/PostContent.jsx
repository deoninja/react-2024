import { PostContentButtons } from './PostContentButtons';

export function PostContent({ data }) {
  return (
    <div>
      <h1>Post Content</h1>
      <PostContentButtons data={data} />
    </div>
  );
}
