import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useVideo } from "../../context";
import { clearHistory, getFromHistory } from "../../utils";
import { HistoryCard } from "../HistoryCard/HistoryCard";
import "./history.css";

function History() {
  const [videoList, setVideoList] = useState([]);
  const encodedToken = localStorage.getItem("encodedToken");
  const [historyChangeFlag, setHistoryChangeFlag] = useState(false);
  const { setDisplayLoader } = useVideo();
  const navigate = useNavigate();
  useEffect(() => {
    setDisplayLoader(true);
    if (encodedToken) {
      (async () => {
        let temp = await getFromHistory();
        setVideoList(temp);
        setDisplayLoader(false);
      })();
    } else {
      setDisplayLoader(false);
    }
  }, [historyChangeFlag]);
  return (
    <div className="fx-grow clr-gray-50 pd-2 history">
      <div className="fx fx-jc-sb fx-ai-center">
        <h2>History</h2>
        <p
          className="cr-pt tx-ul"
          onClick={() => {
            clearHistory();
            setHistoryChangeFlag((prev) => !prev);
          }}>
          Clear history
        </p>
      </div>
      <div className="fx fx-col">
        {videoList.length > 0 ? (
          videoList?.map((video) => (
            <HistoryCard key={video._id} video={video} flagChange={setHistoryChangeFlag} />
          ))
        ) : (
          <div className="ta-center mg-b-2">
            <p className="f-105">Your History is Empty</p>
            <button
              className="pd-1 mg-b-1 bg-clr-gray-900 clr-gray-50 fw-600 brd-sm"
              onClick={() => navigate("/")}>
              Explore Snowflix
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export { History };
