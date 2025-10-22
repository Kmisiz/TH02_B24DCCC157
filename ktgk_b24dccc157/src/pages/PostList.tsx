import { useEffect, useState } from "react";
import { getPosts, deletePost, Post } from "../api/postsApi";
import PostCard from "../component/PostCard";
import "../css/PostList.css";

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  const handleDelete = async (id: number) => {
    await deletePost(id);
    setPosts(posts.filter(p => p.id !== id));
  };

  return (
    <div className="post-list">
      {posts.map(post => (
        <div key={post.id} className="post-item">
          <PostCard post={post} />
          <button onClick={() => handleDelete(post.id!)}>Xóa</button>
        </div>
      ))}
    </div>
  );
}
