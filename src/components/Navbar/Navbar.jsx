import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="bg-clr-gray-900 clr-gray-50 fx fx-ai-center fx-jc-sb p-abs top lft rgt">
      <div className="fx fx-ai-center">
        <i className="fa-solid fa-bars f-105 pd-1 cr-pt   nav-options brd-round"></i>
        <p className="f-105 select-none">SnowFlix</p>
      </div>
      <div className="fx fx-ai-center bg-clr-gray-800 brd-sm pd-i-05 pd-b-025 mg-b-05 w-16">
        <i className="fa-solid fa-magnifying-glass f-1 pd-025"></i>
        <input
          type="text"
          placeholder="Search . . ."
          className="brd-sm o-none pd-i-05 pd-b-025 bg-clr-gray-800 brd-none clr-gray-50 fx-grow"
        />
        <i className="fa-solid fa-xmark cr-pt"></i>
      </div>
      <i className="fa-solid fa-user f-105 pd-1 cr-pt   nav-options brd-round"></i>
    </div>
  );
}

export { Navbar };
