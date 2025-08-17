import React from "react";
import { Link } from "react-router-dom";

export default function PhotoCard({ item }) {
  const gradient = { background: `linear-gradient(135deg, ${item.colors.from}, ${item.colors.to})` };

  return (
    <Link to={`/photo/${item.id}`} className="card" style={{ textDecoration: "none", color: "inherit" }}>
      <div className="canvas" style={gradient} />
      <h3 className="title">{item.title}</h3>
      <p className="sub">{item.tags?.join(" • ")}</p>
    </Link>
  );
}