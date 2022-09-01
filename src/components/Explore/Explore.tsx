import { useEffect, useState } from "react";
import axios from "axios";
import { PlaylistModalDataType } from "types/component-types";
import { Video } from "types/video-types";
import { useVideo } from "../../context";
import { Chips } from "../Chips/Chips";
import { ExploreCard } from "../ExploreCard/ExploreCard";
import { PlayListModal } from "../PlayListModal/PlayListModal";
import "./explore.css";

const Explore: () => JSX.Element = () => {
  const { videoState, setDisplayLoader } = useVideo();
  const [playlistModalData, setPlaylistModalData] = useState<PlaylistModalDataType>({
    showModal: false,
    modalData: {},
    video: {} as Video,
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
  }, [fetchWatchlaterVideos, encodedToken, setDisplayLoader]);
  useEffect(() => setDisplayLoader(false), [setDisplayLoader]);
  return (
    <div className="explore">
      <PlayListModal
        playlistModalData={playlistModalData}
        setPlaylistModalData={setPlaylistModalData}
      />
      <Chips />
      <div className="fx-grow  fx fx-wrap fx-ai-center fx-jc-se ">
        {videoState.videos?.map((video, idx) => (
          <ExploreCard
            key={String(video?._id)}
            video={video}
            watchlaterVideos={watchlaterVideos}
            setFetchWatchlaterVideos={setFetchWatchlaterVideos}
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
};

export { Explore };
