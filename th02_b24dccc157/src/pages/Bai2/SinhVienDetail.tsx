import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { SinhVien } from "./Sinhvien";
import "./SinhvienDetail.css";

function SinhvienDetail() {
  const { id } = useParams<{ id: string }>();
  const [sv, setSV] = useState<SinhVien | null>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    const fetchSV = async () => {
      try {
        setLoading(true);
        const res = await axios.get<SinhVien>(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setSV(res.data);
        setErr("");
      } catch {
        setErr("Không tìm thấy sinh viên!");
      } finally {
        setLoading(false);
      }
    };
    fetchSV();
  }, [id]);

  return (
    <div className="detail-container">
      <Link to="/Bai2" className="back-link">⬅ Quay lại danh sách</Link>

      {loading && <p>Đang tải...</p>}
      {err && <p className="error">{err}</p>}

      {sv && (
        <div className="detail-card">
          <h2>{sv.name}</h2>
          <p><strong>Email:</strong> {sv.email}</p>
          <p><strong>Điện thoại:</strong> {sv.phone}</p>
          <p><strong>Địa chỉ:</strong> {sv.address.street}, {sv.address.city}</p>
          <p><strong>Website:</strong> {sv.website}</p>
          <p><strong>Công ty:</strong> {sv.company.name}</p>
          <p><em>{sv.company.catchPhrase}</em></p>
        </div>
      )}
    </div>
  );
}

export default SinhvienDetail;
