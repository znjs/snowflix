import React from "react";
import { useNavigate } from "react-router-dom";
import date from "date-and-time";
import { addToHistory, removeVideoFromPlaylist } from "../../utils";

function PlaylistVideoCard({ video, playlistId, setFetchVideo }) {
  const navigate = useNavigate();

  // *DATE FORMATTING
  let now = video.date;
  now = now.split("-");
  [now[0], now[1]] = [now[1], now[0]];
  now = new Date(now.join("-"));
  now = date.format(now, "DD MMM YYYY");

  //*ENCODED TOKEN
  const encodedToken = JSON.parse(localStorage.getItem("encodedToken"));

  return (
    <div className="w-20 brd-sm o-hide clr-gray-50 bg-clr-gray-900 clr-gray-50 mg-05">
      <div className="p-rel">
        <img
          className="img-res cr-pt"
          src={`https://i.ytimg.com/vi/${video._id}/hq720.jpg`}
          alt=""
          onClick={() => {
            navigate(`/${video._id}`);
          }}
        />
        <p className="p-abs btm rgt pd-025 mg-b-075 mg-i-025 timestamp brd-sm select-none">12:89</p>
        <i
          className="card-cta fa-solid fa-trash-can p-abs clr-gray-50 top rgt pd-05 mg-075 brd-round bg-clr-gray-600 cr-pt"
          onClick={() => {
            removeVideoFromPlaylist(playlistId, video);
            setFetchVideo((prev) => !prev);
          }}></i>
      </div>
      <div className="pd-i-05 pd-b-025">
        <p
          onClick={() => {
            navigate(`/${video._id}`);
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

export { PlaylistVideoCard };
