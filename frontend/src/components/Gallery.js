import React, { useEffect, useState } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("/api/photos")
      .then(res => setItems(res.data))
      .catch(err => setError(err?.message || "خطا"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>در حال بارگذاری…</p>;
  if (error) return <p>خطا: {error}</p>;

  return (
    <div className="grid">
      {items.map(item => (
        <PhotoCard key={item.id} item={item} />)
      )}
    </div>
  );
}