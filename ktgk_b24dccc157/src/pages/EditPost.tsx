import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPosts, updatePost, Post } from "../api/postsApi";
import PostForm from "../component/PostForm";


export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    getPosts().then(data => {
      const found = data.find(p => p.id === Number(id));
      if (found) setPost(found);
    });
  }, [id]);

  const handleUpdate = async (data: any) => {
    if (id) {
      await updatePost(Number(id), data);
      navigate("/");
    }
  };

  return (
    <div className="form-page">
      <h2>Sửa bài viết</h2>
      {post && <PostForm onSubmit={handleUpdate} initialData={post} />}
    </div>
  );
}
