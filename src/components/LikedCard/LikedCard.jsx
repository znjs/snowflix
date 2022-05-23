import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteFromLiked } from "../../utils";

function LikedCard({ video, flagChange }) {
  const navigate = useNavigate();
  return (
    <div className="h-12 bg-clr-gray-900 clr-gray-50 brd-sm mg-b-1 fx o-hide">
      <div className="p-rel w-20">
        <img
          className="cr-pt history-image"
          src={`https://i.ytimg.com/vi/${video._id}/hq720.jpg`}
          alt={video.description}
          onClick={() => navigate(`/video/${video._id}`)}
        />
        <p className="p-abs btm rgt pd-025 mg-b-075 mg-i-025 timestamp brd-sm select-none">12:89</p>
      </div>
      <div className="fx fx-col pd-2 clr-gray-50 p-rel fx-grow">
        <p className="fw-600 cr-pt" onClick={() => navigate(`/video/${video._id}`)}>
          {video.title}
        </p>
        <p className="pd-b-025 fw-600">{video.creator}</p>
        <p className="mg-b-05 videoDesc">{video.description}</p>
        <span
          className="cr-pt p-abs rgt mg-i-2"
          onClick={() => {
            deleteFromLiked(video);
            flagChange((prev) => !prev);
          }}>
          <i className="fa-regular fa-trash-can"></i>
        </span>
      </div>
    </div>
  );
}

export { LikedCard };
