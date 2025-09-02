import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Gallery from "./components/Gallery";
import PhotoDetail from "./pages/PhotoDetail";

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">🖼️ گالری گرادینت</h1>
        <nav>
          <Link className="btn" to="/">
            خانه
          </Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/photo/:id" element={<PhotoDetail />} />
      </Routes>
    </div>
  );
}
