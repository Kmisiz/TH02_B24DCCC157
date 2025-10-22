import { Link } from "react-router-dom";
import "../css/Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">BlogApp</h2>
      <div className="nav-links">
        <Link to="/">Trang chủ</Link>
        <Link to="/create">Tạo bài viết</Link>
      </div>
    </nav>
  );
}
