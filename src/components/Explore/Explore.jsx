import React, { useEffect, useState } from "react";
import axios from "axios";
import { useVideo } from "../../context";
import { Chips } from "../Chips/Chips";
import { ExploreCard } from "../ExploreCard/ExploreCard";
import { PlayListModal } from "../PlayListModal/PlayListModal";
import "./explore.css";

function Explore() {
  const { videoState, setDisplayLoader } = useVideo();
  const [playlistModalData, setPlaylistModalData] = useState({
    showModal: false,
    modalData: {},
    video: {},
  });
  const [watchlaterVideos, setWatchlaterVideos] = useState([]);
  const [fetchWatchlaterVideos, setFetchWatchlaterVideos] = useState(false);
  const encodedToken = localStorage.getItem("encodedToken");
  useEffect(() => {
    setDisplayLoader(true);
    (async () => {
      if (encodedToken) {
        try {
          let res = await axios.get("/api/user/watchlater", {
            headers: { authorization: encodedToken },
          });
          setWatchlaterVideos(res.data.watchlater);
        } catch (err) {
          console.error(err);
        }
      }
      setDisplayLoader(false);
    })();
  }, [fetchWatchlaterVideos]);
  useEffect(() => setDisplayLoader(false));
  return (
    <div className="explore">
      <PlayListModal
        playlistModalData={playlistModalData}
        setPlaylistModalData={setPlaylistModalData}
      />
      <Chips />
      <div className="fx-grow  fx fx-wrap fx-ai-center fx-jc-se ">
        {videoState.videos.map((video) => (
          <ExploreCard
            video={video}
            watchlaterVideos={watchlaterVideos}
            setFetchWatchlaterVideos={setFetchWatchlaterVideos}
            key={video._id}
            setPlaylistModalData={setPlaylistModalData}
          />
        ))}
        <div className="w-20 brd-sm o-hide clr-gray-50 bg-clr-gray-900 mg-05"></div>
        <div className="w-20 brd-sm o-hide clr-gray-50 bg-clr-gray-900 mg-05"></div>
        <div className="w-20 brd-sm o-hide clr-gray-50 bg-clr-gray-900 mg-05"></div>
        <div className="w-20 brd-sm o-hide clr-gray-50 bg-clr-gray-900 mg-05"></div>
      </div>
    </div>
  );
}

export { Explore };
