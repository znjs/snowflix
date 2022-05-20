import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useVideo } from "../../context";
import { PlaylistCard } from "../PlaylistCard/PlaylistCard";
import "./playlist.css";

function Playlist() {
  const encodedToken = localStorage.getItem("encodedToken");
  const [playlistData, setPlaylistData] = useState([]);
  const [fetchPlaylistFlag, setFetchPlaylistFlag] = useState(false);
  const navigate = useNavigate();
  const { setDisplayLoader } = useVideo();
  useEffect(() => {
    setDisplayLoader(true);
    (async () => {
      if (encodedToken) {
        try {
          let res = await axios.get("/api/user/playlists", {
            headers: { authorization: encodedToken },
          });
          setPlaylistData(res.data.playlists);
        } catch (err) {
          console.error(err);
        }
      }
      setDisplayLoader(false);
    })();
  }, [fetchPlaylistFlag]);
  return (
    <div className="pd-2 clr-gray-50 fx-grow playlist">
      <h2>Playlist Videos</h2>
      <div className="fx fx-wrap">
        {!!playlistData.length ? (
          playlistData.map((playlist, idx) => (
            <PlaylistCard
              playlist={playlist}
              key={idx}
              setFetchPlaylistFlag={setFetchPlaylistFlag}
            />
          ))
        ) : (
          <div className="ta-center w-full mg-b-2">
            <p className="f-105">Your Playlist is Empty</p>
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

export { Playlist };
