import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import date from "date-and-time";
import { addToWatchlater, removeFromWacthlater } from "../../utils";
import "./ExploreCard.css";

function ExploreCard({ video, setPlaylistModalData, setFetchWatchlaterVideos, watchlaterVideos }) {
  const navigate = useNavigate();
  const location = useLocation();
  const videoId = video._id;
  // *DATE FORMATTING
  let now = video.date;
  now = now.split("-");
  [now[0], now[1]] = [now[1], now[0]];
  now = new Date(now.join("-"));
  now = date.format(now, "DD MMM YYYY");

  //*ENCODED TOKEN
  const encodedToken = localStorage.getItem("encodedToken");

  return (
    <div className="w-20 brd-sm o-hide clr-gray-50 bg-clr-gray-900 clr-gray-50 mg-05">
      <div className="p-rel">
        <img
          className="img-res cr-pt"
          src={`https://i.ytimg.com/vi/${video._id}/hq720.jpg`}
          alt=""
          onClick={() => {
            navigate(`/video/${video._id}`);
          }}
        />
        <p className="p-abs btm rgt pd-025 mg-b-075 mg-i-025 timestamp brd-sm select-none">
          {video.time}
        </p>
        <i
          onClick={() => {
            if (encodedToken) {
              setPlaylistModalData((prev) => ({
                ...prev,
                showModal: true,
                video: video,
              }));
            } else {
              navigate("/login", { replace: true, state: { from: location } });
            }
          }}
          className="card-cta fa-solid fa-plus p-abs clr-gray-50 btm lft pd-025 mg-075 brd-round bg-clr-gray-600 cr-pt"></i>
        <i
          onClick={() => {
            if (encodedToken) {
              watchlaterVideos.find((video) => video._id === videoId)
                ? removeFromWacthlater(video)
                : addToWatchlater(video);
              setFetchWatchlaterVideos((prev) => !prev);
            } else {
              navigate("/login", { replace: true, state: { from: location } });
            }
          }}
          className={` ${
            watchlaterVideos.find((video) => video._id === videoId)
              ? "fa-solid fa-check"
              : "fas fa-history"
          } p-abs clr-gray-50 btm lft pd-025 mg-b-075 mg-i-3 brd-round bg-clr-gray-600 cr-pt card-cta`}></i>
      </div>
      <div className="pd-i-05 pd-b-025">
        <p
          onClick={() => {
            navigate(`/video/${video._id}`);
          }}
          className="cr-pt video-title pd-b-025">
          {video.title}
        </p>
        <div className="fx fx-ai-center fx-jc-sb pd-b-025">
          <p className="clr-gray-300">{video.creator}</p>
          <p className="f-075 clr-gray-400">{now}</p>
        </div>
      </div>
    </div>
  );
}

export { ExploreCard };
