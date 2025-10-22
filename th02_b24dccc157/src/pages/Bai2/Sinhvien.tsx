import React from "react";
import "./Sinhvien.css"
import { Link } from "react-router-dom";
export interface SinhVien {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
  };
}

interface Props {
  sv: SinhVien;
}

function Sinhvien({ sv }: Props) {
  return (
    <div className="card">
      <h3>{sv.name}</h3>
      <p>
        <strong>Email:</strong> {sv.email}
      </p>
      <p>
        <strong>Địa chỉ:</strong> {sv.address.street}, {sv.address.city}
      </p>
      <p>
        <strong>Điện thoại:</strong> {sv.phone}
      </p>
      <p>
        <strong>Website:</strong> {sv.website}
      </p>
      <p>
        <strong>Công ty:</strong> {sv.company.name}
      </p>
      <p>
        <em>{sv.company.catchPhrase}</em>
      </p>
      <Link to={`/Bai2/${sv.id}`} className="linksv" >Xem chi tiết</Link>
    </div>
  );
}

export default Sinhvien;
