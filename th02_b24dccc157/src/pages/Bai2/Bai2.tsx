import axios from "axios";
import React, { useEffect, useState } from "react";
import Sinhvien, { SinhVien } from "./Sinhvien";

function Bai2() {
  const [svList, setSVList] = useState<SinhVien[]>([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    const showSV = async () => {
      try {
        setLoading(true);
        const res = await axios.get<SinhVien[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setSVList(res.data);
        setErr("");
      } catch {
        setErr("Không có dữ liệu ");
        setSVList([]);
      } finally {
        setLoading(false);
      }
    };
    showSV();
  }, []);

  return (
    <div style={{ fontFamily: "Poppins", padding: 20, textAlign:"center",  }}>
      <h2>Danh sách sinh viên</h2>

      {loading && <p>Đang tải dữ liệu...</p>}
      {err && <p style={{ color: "red" }}>{err}</p>}

      {!loading && svList.length > 0 && (
        <div className="app">
          {svList.map((sv) => (
            <Sinhvien key={sv.id} sv={sv} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Bai2;
