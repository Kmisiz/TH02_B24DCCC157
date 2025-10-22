import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPosts, Post } from "../api/postsApi";
import "../css/PostDetail.css";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    getPosts().then(data => {
      const found = data.find(p => p.id === Number(id));
      setPost(found || null);
    });
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="post-detail">
      <img src={post.thumbnail} alt={post.title} />
      <h1>{post.title}</h1>
      <p><b>Tác giả:</b> {post.author}</p>
      <p><b>Thể loại:</b> {post.category}</p>
      <p><b>Ngày tạo:</b> {post.createdAt}</p>
      <p>{post.content}</p>
    </div>
  );
}
