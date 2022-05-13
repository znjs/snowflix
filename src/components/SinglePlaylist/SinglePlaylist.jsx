import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useVideo } from "../../context";
import { ExploreCard } from "../ExploreCard/ExploreCard";
import { PlaylistVideoCard } from "../PlaylistVideoCard/PlaylistVideoCard";
import "./singleplaylist.css";

function SinglePlaylist() {
  const encodedToken = JSON.parse(localStorage.getItem("encodedToken"));
  const navigate = useNavigate();
  const { setDisplayLoader } = useVideo();
  const [fetchVideos, setFetchVideo] = useState(false);
  const [videos, setVideos] = useState([]);
  const { playlistId } = useParams();
  useEffect(() => {
    setDisplayLoader(true);
    (async () => {
      try {
        let res = await axios.get(`/api/user/playlists/${playlistId}`, {
          headers: { authorization: encodedToken },
        });
        setVideos(res.data.playlist.videos);
      } catch (err) {
        console.error(err);
      }
      setDisplayLoader(false);
    })();
  }, [fetchVideos]);
  return (
    <div className="fx-grow  pd-2">
      <div className="fx fx-wrap">
        {!!videos.length ? (
          videos.map((video) => (
            <PlaylistVideoCard
              video={video}
              key={video._id}
              playlistId={playlistId}
              setFetchVideo={setFetchVideo}
            />
          ))
        ) : (
          <div className="ta-center w-full mg-b-2 clr-gray-50">
            <p className="f-105">No videos in this Playlist</p>
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

export { SinglePlaylist };
