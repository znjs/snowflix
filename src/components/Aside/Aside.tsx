import { NavLink } from "react-router-dom";
import { AsideType } from "types/component-types";
import { useVideo } from "../../context";
import "./aside.css";

const Aside: AsideType = ({ theme }) => {
  const { videoDispatch } = useVideo();
  const bgClr = theme === "dark" ? { backgroundColor: "#374151" } : { backgroundColor: "#bfc3cb" };
  return (
    <div className=" bg-clr-gray-900 w-min-14 aside-container pd-1">
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? bgClr : {})}
        onClick={() => {
          videoDispatch({ type: "SEARCH_VIDEO", payload: { searchText: "" } });
        }}
        className="fx fx-ai-center f-1025 pd-b-05 cr-pt select-none  brd-sm clr-gray-50 mg-b-05">
        <i className="fa-regular fa-compass pd-i-1"></i>
        <p>Explore</p>
      </NavLink>
      <NavLink
        to="/playlist"
        style={({ isActive }) => (isActive ? bgClr : {})}
        className="fx fx-ai-center f-1025 pd-b-05 cr-pt select-none clr-gray-50 mg-b-05 brd-sm">
        <i className="fa-solid fa-list pd-i-1"></i>
        <p>Playlist</p>
      </NavLink>
      <NavLink
        to="/watchlater"
        style={({ isActive }) => (isActive ? bgClr : {})}
        className="fx fx-ai-center f-1025 pd-b-05 cr-pt select-none clr-gray-50 mg-b-05 brd-sm">
        <i className="fa-regular fa-clock pd-i-1"></i>
        <p>Watch Later</p>
      </NavLink>
      <NavLink
        to="/likedVideos"
        style={({ isActive }) => (isActive ? bgClr : {})}
        className="fx fx-ai-center f-1025 pd-b-05 cr-pt select-none clr-gray-50 mg-b-05 brd-sm">
        <i className="fa-solid fa-heart pd-i-1"></i>
        <p>Liked Video</p>
      </NavLink>
      <NavLink
        to="/history"
        style={({ isActive }) => (isActive ? bgClr : {})}
        className="fx fx-ai-center f-1025 pd-b-05 cr-pt select-none clr-gray-50 mg-b-05 brd-sm">
        <i className="fa-solid fa-clock-rotate-left pd-i-1"></i>
        <p>History</p>
      </NavLink>
    </div>
  );
};

export { Aside };
