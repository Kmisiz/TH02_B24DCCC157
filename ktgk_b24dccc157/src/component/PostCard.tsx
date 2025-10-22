import { Link } from "react-router-dom";
import { Post } from "../api/postsApi";
import "../css/PostCard.css";

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="post-card">
      <img src={post.thumbnail} alt={post.title} />
      <h3>{post.title}</h3>
      <p>{post.category}</p>
      <Link to={`/posts/${post.id}`}>Xem chi tiết</Link>
    </div>
  );
}
