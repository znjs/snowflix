import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Aside,
  Explore,
  History,
  Navbar,
  Playlist,
  Watchlater,
} from "../../components";
import "./home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="main-container fx">
        <Aside />
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/watchlater" element={<Watchlater />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </div>
  );
}

export { Home };
