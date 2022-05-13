import React from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useVideo } from "../../context";
import "./aside.css";

const bgClr = { backgroundColor: "#374151" };
function Aside() {
  const { setDisplayLoader } = useVideo();
  return (
    <div className=" bg-clr-gray-900 w-min-14 aside-container pd-1">
      <NavLink
        to="/"
        onClick={() => setDisplayLoader(true)}
        style={({ isActive }) => (isActive ? bgClr : null)}
        className="fx fx-ai-center f-1025 pd-b-05 cr-pt select-none  brd-sm clr-gray-50">
        <i className="fa-regular fa-compass pd-i-1"></i>
        <p>Explore</p>
      </NavLink>
      <NavLink
        to="/playlist"
        onClick={() => setDisplayLoader(true)}
        style={({ isActive }) => (isActive ? bgClr : null)}
        className="fx fx-ai-center f-1025 pd-b-05 cr-pt select-none clr-gray-50 brd-sm">
        <i className="fa-solid fa-list pd-i-1"></i>
        <p>Playlist</p>
      </NavLink>
      <NavLink
        to="/watchlater"
        onClick={() => setDisplayLoader(true)}
        style={({ isActive }) => (isActive ? bgClr : null)}
        className="fx fx-ai-center f-1025 pd-b-05 cr-pt select-none clr-gray-50 brd-sm">
        <i className="fa-regular fa-clock pd-i-1"></i>
        <p>Watch Later</p>
      </NavLink>
      <NavLink
        to="/likedVideos"
        onClick={() => setDisplayLoader(true)}
        style={({ isActive }) => (isActive ? bgClr : null)}
        className="fx fx-ai-center f-1025 pd-b-05 cr-pt select-none clr-gray-50 brd-sm">
        <i className="fa-solid fa-heart pd-i-1"></i>
        <p>Liked Video</p>
      </NavLink>
      <NavLink
        to="/history"
        onClick={() => setDisplayLoader(true)}
        style={({ isActive }) => (isActive ? bgClr : null)}
        className="fx fx-ai-center f-1025 pd-b-05 cr-pt select-none clr-gray-50 brd-sm">
        <i className="fa-solid fa-clock-rotate-left pd-i-1"></i>
        <p>History</p>
      </NavLink>
    </div>
  );
}

export { Aside };
