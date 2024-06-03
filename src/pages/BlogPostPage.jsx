import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
export function BlogPostPage() {
  const [posts, setPosts] = useState([]);
  const { state } = useLocation();

  console.log(window.history.state);

  useEffect(() => {
    if (state && state.posts) {
      setPosts(state.posts);
    }
  }, [state]);

  return (
    <div>
      <h1>Welcome to BlogPost Page</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
