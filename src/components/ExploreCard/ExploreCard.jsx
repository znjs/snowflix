import React from "react";
import "./ExploreCard.css";
function ExploreCard() {
  return (
    <div className="w-20 brd-sm o-hide clr-gray-50 bg-clr-gray-900 mg-05">
      <div className="p-rel">
        <img
          className="img-res cr-pt"
          src="https://i.ytimg.com/vi/LRP8d7hhpoQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAujWabke2prCLCyielJz3koNHJ0A"
          alt=""
        />
        <p className="p-abs btm rgt pd-025 mg-b-075 mg-i-025 timestamp brd-sm select-none">
          12:89
        </p>
      </div>
      <div className="pd-i-05 pd-b-025">
        <p className="cr-pt">Lorem ipsum dolor sit</p>
        <div className="fx fx-ai-center fx-jc-sb">
          <p className="fw-600">John Doe</p>
          <p className="f-075 clr-gray-400">12 Dec 2021</p>
        </div>
      </div>
    </div>
  );
}

export { ExploreCard };
