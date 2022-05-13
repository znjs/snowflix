import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useVideo } from "../../context/video-context";
import "./navbar.css";

function Navbar({ changeTheme, theme }) {
  const [searchText, setSearchText] = useState("");
  const { videoDispatch } = useVideo();
  const navigate = useNavigate();
  const encodedToken = JSON.parse(localStorage.getItem("encodedToken"));
  return (
    <div className="bg-clr-gray-900 clr-gray-50 fx fx-ai-center fx-jc-sb p-abs top lft rgt">
      <div className="fx fx-ai-center">
        <i className="fa-solid fa-bars f-105 pd-1 cr-pt   nav-options brd-round"></i>
        <p
          className="f-105 fw-600 select-none title-name cr-pt"
          onClick={() => {
            navigate("/");
          }}>
          <span className="bg-clr-red-600">S</span>nowFlix
        </p>
      </div>
      <div className="fx fx-ai-center bg-clr-gray-800 brd-sm pd-i-05 pd-b-025 mg-b-05 w-16">
        <i className="fa-solid fa-magnifying-glass f-1 pd-025"></i>
        <input
          type="text"
          placeholder="Search . . ."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter" || e.key === "Backspace") {
              videoDispatch({ type: "SEARCH_VIDEO", payload: { searchText } });
            }
          }}
          className="brd-sm o-none global-search pd-i-05 pd-b-025 bg-clr-gray-800 brd-none clr-gray-50 fx-grow"
        />
        <i
          className="fa-solid fa-xmark cr-pt"
          onClick={() => {
            setSearchText("");
            videoDispatch({ type: "SEARCH_VIDEO", payload: { searchText: "" } });
          }}></i>
      </div>
      <div className="fx">
        <div onClick={() => changeTheme()}>
          {theme === "dark" ? (
            <i className="fa-solid fa-sun f-105 pd-1 cr-pt nav-options brd-round"></i>
          ) : (
            <i className="fa-solid fa-moon f-105 pd-1 cr-pt nav-options brd-round"></i>
          )}
        </div>
        {encodedToken ? (
          <i
            className="fa-solid fa-user f-105 pd-1 cr-pt nav-options brd-round"
            onClick={() => navigate("/userProfile")}></i>
        ) : (
          <i
            className="fa-solid fa-arrow-right-to-bracket f-105 pd-1 cr-pt nav-options brd-round"
            onClick={() => navigate("/login")}></i>
        )}
      </div>
    </div>
  );
}

export { Navbar };
