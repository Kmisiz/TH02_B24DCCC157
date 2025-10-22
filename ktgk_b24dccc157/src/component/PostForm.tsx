import { useState } from "react";
import { Post } from "../api/postsApi";
import "../css/PostForm.css";

export default function PostForm({ onSubmit, initialData }: {
  onSubmit: (data: Omit<Post, "id" | "createdAt">) => void;
  initialData?: Omit<Post, "id" | "createdAt">;
}) {
  const [form, setForm] = useState(
    initialData || { title: "", author: "", thumbnail: "", content: "", category: "" }
  );

    const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form className="post-form" onSubmit={(e) => {
      e.preventDefault();
      onSubmit(form);
    }}>
      <input name="title" placeholder="Tiêu đề" value={form.title} onChange={handleChange} />
      <input name="author" placeholder="Tác giả" value={form.author} onChange={handleChange} />
      <input name="thumbnail" placeholder="Ảnh (URL)" value={form.thumbnail} onChange={handleChange} />
      <input name="category" placeholder="Thể loại" value={form.category} onChange={handleChange} />
      <textarea name="content" placeholder="Nội dung..." value={form.content} onChange={handleChange} />
      <button type="submit">Lưu bài viết</button>
    </form>
  );
}
