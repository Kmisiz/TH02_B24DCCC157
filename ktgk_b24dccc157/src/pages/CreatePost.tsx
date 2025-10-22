import { addPost } from "../api/postsApi";
import PostForm from "../component/PostForm";

import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const navigate = useNavigate();

  const handleAdd = async (data: any) => {
    await addPost(data);
    navigate("/");
  };

  return (
    <div className="form-page">
      <h2> Tạo bài viết mới</h2>
      <PostForm onSubmit={handleAdd} />
    </div>
  );
}
