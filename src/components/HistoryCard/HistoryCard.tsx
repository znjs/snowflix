import { useNavigate } from "react-router-dom";
import { HistoryCardType } from "types/component-types";
import { deleteFromHistory } from "../../utils";
import "./historyCard.css";

const HistoryCard: HistoryCardType = ({ video, flagChange }) => {
  const navigate = useNavigate();
  return (
    <div className="h-12 bg-clr-gray-900 brd-sm mg-b-1 fx o-hide">
      <div className="p-rel w-20">
        <img
          className="cr-pt history-image"
          src={`https://i.ytimg.com/vi/${video._id}/hq720.jpg`}
          alt=""
          onClick={() => navigate(`/video/${video._id}`)}
        />
        <p className="p-abs btm rgt pd-025 mg-b-075 mg-i-025 timestamp brd-sm select-none">
          {video.time}
        </p>
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
            deleteFromHistory(video);
            flagChange((prev: boolean) => !prev);
          }}>
          <i className="fa-regular fa-trash-can"></i>
        </span>
      </div>
    </div>
  );
};

export { HistoryCard };
