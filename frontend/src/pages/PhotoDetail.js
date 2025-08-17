import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function PhotoDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`/api/photos/${id}`)
      .then(res => setData(res.data))
      .catch(err => setError(err?.message || "خطا"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>در حال بارگذاری…</p>;
  if (error) return <p>خطا: {error}</p>;
  if (!data) return <p>یافت نشد</p>;

  const gradient = { background: `linear-gradient(135deg, ${data.colors.from}, ${data.colors.to})` };

  return (
    <div style={{ marginTop: 24 }}>
      <div className="card">
        <div className="canvas" style={gradient} />
        <h2 className="title">{data.title}</h2>
        <p className="sub">{data.description}</p>
        <p className="sub" style={{ marginTop: 8 }}><strong>Colors:</strong> {data.colors.from} → {data.colors.to}</p>
        {data.tags?.length ? (<p className="sub"><strong>Tags:</strong> {data.tags.join(", ")}</p>) : null}
      </div>
      <div style={{ marginTop: 16 }}>
        <Link className="btn" to="/">← بازگشت به گالری</Link>
      </div>
    </div>
  );
}