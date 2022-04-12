import React from "react";
import { NavLink } from "react-router-dom";
import "./aside.css";

function Aside() {
  const bgClr = { backgroundColor: "#374151" };
  return (
    <div className=" bg-clr-gray-900 w-min-14 aside-container pd-1">
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? bgClr : null)}
        className="fx fx-ai-center f-1025 pd-b-05 cr-pt select-none  brd-sm clr-gray-50"
      >
        <i className="fa-regular fa-compass pd-i-1"></i>
        <p>Explore</p>
      </NavLink>
      <NavLink
        to="/playlist"
        style={({ isActive }) => (isActive ? bgClr : null)}
        className="fx fx-ai-center f-1025 pd-b-05 cr-pt select-none clr-gray-50 brd-sm"
      >
        <i className="fa-solid fa-list pd-i-1"></i>
        <p>Playlist</p>
      </NavLink>
      <NavLink
        to="/watchlater"
        style={({ isActive }) => (isActive ? bgClr : null)}
        className="fx fx-ai-center f-1025 pd-b-05 cr-pt select-none clr-gray-50 brd-sm"
      >
        <i className="fa-regular fa-clock pd-i-1"></i>
        <p>Watch Later</p>
      </NavLink>
      <NavLink
        to="/history"
        style={({ isActive }) => (isActive ? bgClr : null)}
        className="fx fx-ai-center f-1025 pd-b-05 cr-pt select-none clr-gray-50 brd-sm"
      >
        <i className="fa-solid fa-clock-rotate-left pd-i-1"></i>
        <p>History</p>
      </NavLink>
    </div>
  );
}

export { Aside };
