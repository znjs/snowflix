import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useVideo } from "../../context";
import { WatchlaterCard } from "../WatchlaterCard/WatchlaterCard";
import "./watchlater.css";

function Watchlater() {
  const navigate = useNavigate();
  const [watchLaterVideos, setWatchLaterVideos] = useState([]);
  const [fetchWatchlaterFlag, setFetchWatchlaterFlag] = useState(false);
  const { setDisplayLoader } = useVideo();
  const encodedToken = JSON.parse(localStorage.getItem("encodedToken"));
  useEffect(() => {
    if (encodedToken) {
      setDisplayLoader(true);
      (async () => {
        try {
          let res = await axios.get("/api/user/watchlater", {
            headers: { authorization: encodedToken },
          });
          setWatchLaterVideos(res.data.watchlater);
        } catch (err) {
          console.error(err);
        }
        setDisplayLoader(false);
      })();
    }
  }, [fetchWatchlaterFlag]);
  return (
    <div className="fx-grow pd-2 clr-gray-50 watchLater">
      <h2>WatchLater Videos</h2>
      {watchLaterVideos.length > 0 ? (
        watchLaterVideos.map((video) => (
          <WatchlaterCard
            key={video._id}
            video={video}
            setFetchWatchlaterFlag={setFetchWatchlaterFlag}
          />
        ))
      ) : (
        <div className="ta-center mg-b-2">
          <p className="f-105">Your Watchlater is Empty</p>
          <button
            className="pd-1 mg-b-1 bg-clr-gray-900 clr-gray-50 fw-600 brd-sm"
            onClick={() => navigate("/")}>
            Explore Snowflix
          </button>
        </div>
      )}
    </div>
  );
}

export { Watchlater };
