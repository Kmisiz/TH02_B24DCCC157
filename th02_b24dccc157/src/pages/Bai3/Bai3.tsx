import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Bai3.css";

interface Article {
  id: number;
  title: string;
  summary: string;
  image_url: string;
  url: string;
  published_at: string;
}

function Bai3() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const res = await axios.get<{ results: Article[] }>(
          "https://api.spaceflightnewsapi.net/v4/articles?limit=10"
        );
        setArticles(res.data.results);
        setErr("");
      } catch {
        setErr("Không thể tải dữ liệu tin tức");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-container">
      <h2>Tin tức vũ trụ</h2>

      {loading && <p>Đang tải dữ liệu...</p>}
      {err && <p className="error">{err}</p>}

      <div className="news-grid">
        {!loading &&
          !err &&
          articles.map((art) => (
            <div key={art.id} className="news-card">
              <img src={art.image_url} alt={art.title} />
              <div className="news-content">
                <h3>{art.title}</h3>
                <p>{art.summary.length > 120 ? art.summary.slice(0, 120) + "..." : art.summary}</p>
                <a href={art.url} target="_blank" rel="noopener noreferrer">
                  🔗 Đọc bài gốc
                </a>
                <p className="date">
                   {new Date(art.published_at).toLocaleString("vi-VN")}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Bai3;
