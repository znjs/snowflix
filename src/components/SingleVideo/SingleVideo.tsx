import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { PlaylistModalDataType } from "types/component-types";
import { Video } from "types/video-types";
import { useVideo } from "../../context";
import {
  addToHistory,
  addToLikedVideo,
  addToWatchlater,
  deleteFromLiked,
  removeFromWacthlater,
  triggerToast,
} from "../../utils";
import { PlayListModal } from "../PlayListModal/PlayListModal";
import "./singlevideo.css";

function SingleVideo() {
  const navigate = useNavigate();
  const location = useLocation();
  const encodedToken = localStorage.getItem("encodedToken");
  const [likedVideos, setLikedVideos] = useState<Video[]>([]);
  const [watchLaterVideos, setWatchLaterVideos] = useState<Video[]>([]);
  const [likeStatusFlag, setLikeStatusFlag] = useState(false);
  const [watchLaterStatusFlag, setWatchLaterStatusFlag] = useState(false);
  const { videoId } = useParams();
  const { videoState } = useVideo();
  const [playlistModalData, setPlaylistModalData] = useState<PlaylistModalDataType>({
    showModal: false,
    modalData: {},
    video: {} as Video,
  });
  const video = videoState.videos.find((video) => video._id === videoId);
  if (!!!video) navigate("/pageNotFound");

  useEffect(() => {
    addToHistory(video as Video);
  }, [video]);

  useEffect(() => {
    if (encodedToken) {
      (async () => {
        try {
          let res = await axios.get("/api/user/likes", {
            headers: { authorization: encodedToken },
          });
          if (res.status === 200) {
            setLikedVideos(res.data.likes);
          }
        } catch (err) {
          console.error(err);
        }
      })();
    }
  }, [likeStatusFlag, encodedToken]);

  useEffect(() => {
    if (encodedToken) {
      (async () => {
        try {
          let res = await axios.get("/api/user/watchlater", {
            headers: { authorization: encodedToken },
          });
          if (res.status === 200) {
            setWatchLaterVideos(res.data.watchlater);
          }
        } catch (err) {
          console.error(err);
        }
      })();
    }
  }, [watchLaterStatusFlag, encodedToken]);

  return (
    <div className="fx-grow container-wrapper">
      <PlayListModal
        playlistModalData={playlistModalData}
        setPlaylistModalData={setPlaylistModalData}
      />
      <div className="singleVideo-container">
        <iframe
          width="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          style={{
            aspectRatio: "1.77",
            maxHeight: "calc(100vh - 68px)",
          }}
          frameBorder="0"
          allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        <h2 className="clr-gray-50 mg-b-05">{video?.title}</h2>
        <div className="clr-gray-50 mg-b-05 fx fx-ai-center fx-jc-sb">
          <div className="fx fx-ai-center">
            <p>{String(video?.views)} views</p>
            <i className="fa-solid fa-circle f-05 pd-i-05"></i>
            <p>{video?.date}</p>
          </div>
          <div className="fx">
            <p
              className="cr-pt mg-i-075"
              onClick={() => {
                navigator.clipboard.writeText(
                  `https://snowflix-react.netlify.app/video/${video?._id}`,
                );
                triggerToast("success", "Link copied to clipboard");
              }}>
              <i className={`fa-solid fa-share pd-i-05`}></i>
              Share
            </p>
            <p
              className="cr-pt mg-i-075"
              onClick={() => {
                if (encodedToken) {
                  likedVideos.find((video) => video?._id === videoId)
                    ? deleteFromLiked(video as Video)
                    : addToLikedVideo(video as Video);
                  setLikeStatusFlag((prev) => !prev);
                } else {
                  navigate("/login", { replace: true, state: { from: location } });
                }
              }}>
              <i
                className={`${
                  likedVideos.find((video) => video._id === videoId) ? "fa-solid" : "fa-regular"
                }  fa-thumbs-up pd-i-05`}></i>
              Like
            </p>
            <p
              className="cr-pt mg-i-075"
              onClick={() => {
                if (encodedToken) {
                  watchLaterVideos.find((video) => video._id === videoId)
                    ? removeFromWacthlater(video as Video)
                    : addToWatchlater(video as Video);
                  setWatchLaterStatusFlag((prev) => !prev);
                } else {
                  navigate("/login", { replace: true, state: { from: location } });
                }
              }}>
              <i
                className={`${
                  watchLaterVideos.find((video) => video._id === videoId)
                    ? "fa-solid fa-check"
                    : "fas fa-history"
                } pd-i-05`}></i>
              Watchlater
            </p>
            <p
              className="cr-pt mg-i-075"
              onClick={() => {
                if (encodedToken) {
                  setPlaylistModalData((prev) => ({
                    ...prev,
                    showModal: true,
                    video: video as Video,
                  }));
                } else {
                  navigate("/login", { replace: true, state: { from: location } });
                }
              }}>
              <i className="fas fa-plus-circle mg-i-075"></i>
              Add to Playlist
            </p>
          </div>
        </div>
        <hr className="divider" />
        <p className="clr-gray-200 mg-b-025 f-1025">{video?.creator}</p>
        <p className="clr-gray-50">{video?.description}</p>
      </div>
    </div>
  );
}

export { SingleVideo };
