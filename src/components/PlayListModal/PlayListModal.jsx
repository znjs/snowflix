import React, { useEffect, useState } from "react";
import axios from "axios";
import { addVideoToPlaylist, createNewPlaylist, removeVideoFromPlaylist } from "../../utils";
import "./playlistModal.css";

function PlayListModal({ playlistModalData, setPlaylistModalData }) {
  const [playlistData, setPlaylistData] = useState([]);
  const [newPlaylistState, setNewPlaylistState] = useState({
    createState: false,
    playlistName: "",
  });
  const [fetchPlaylist, setFetchPlaylist] = useState(false);
  const encodedToken = JSON.parse(localStorage.getItem("encodedToken"));
  const { video } = playlistModalData;
  useEffect(() => {
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
    })();
  }, [playlistModalData.showModal, newPlaylistState.createState, fetchPlaylist]);
  return (
    <div
      className={`${
        playlistModalData.showModal ? "fx" : "d-none"
      } p-abs bg-clr-yellow-600 modal-container`}>
      <div className="bg-clr-gray-900 clr-gray-50 pd-1 brd-sm w-min-16">
        <div className="fx fx-jc-sb fx-ai-center">
          <h4 className="mg-b-05">Add to...</h4>
          <i
            className="fa-solid fa-xmark clr-red-600 cr-pt"
            onClick={() => {
              setPlaylistModalData((prev) => ({ ...prev, showModal: false }));
            }}></i>
        </div>
        <hr />
        <div className="pd-b-1">
          {playlistData?.map((item, idx) => (
            <div key={item._id} className="fx fx-ai-center">
              <input
                type="checkbox"
                id={`option ${idx}`}
                name={`option ${idx}`}
                checked={item.videos.find((singleVideo) => singleVideo._id === video._id)}
                onChange={() => {
                  item.videos.find((singleVideo) => singleVideo._id === video._id)
                    ? removeVideoFromPlaylist(item._id, video)
                    : addVideoToPlaylist(item._id, video);
                  setFetchPlaylist((prev) => !prev);
                }}
              />
              <label htmlFor={`option ${idx}`} className="mg-i-1 fx-grow">
                {item.title}
              </label>
            </div>
          ))}
        </div>
        {newPlaylistState.createState ? (
          <button
            className="w-full mg-b-05 pd-b-025 brd-sm bg-clr-gray-400 clr-gray-900 fw-600"
            onClick={() =>
              setNewPlaylistState((prev) => ({
                ...prev,
                createState: !prev.createState,
              }))
            }>
            Create new Playlist
          </button>
        ) : (
          <div className="fx fx-col ">
            <input
              type="text"
              placeholder="playlist name . . ."
              className="brd-sm pd-i-05 pd-b-025 clr-gray-50 bg-clr-gray-800 o-none brd-none"
              onChange={(e) =>
                setNewPlaylistState((prev) => ({
                  ...prev,
                  playlistName: e.target.value,
                }))
              }
            />
            <button
              className="w-full mg-b-05 pd-b-025 brd-sm bg-clr-gray-700 clr-gray-50 fw-600"
              onClick={() => {
                if (newPlaylistState.playlistName !== "") {
                  setNewPlaylistState((prev) => ({
                    ...prev,
                    playlistName: "",
                    createState: !prev.createState,
                  }));
                  createNewPlaylist(newPlaylistState.playlistName);
                }
              }}>
              Create
            </button>
            <button
              className="w-full mg-b-05 pd-b-025 brd-sm bg-clr-gray-400 clr-gray-900 fw-600"
              onClick={() =>
                setNewPlaylistState((prev) => ({
                  ...prev,
                  playlistName: "",
                  createState: !prev.createState,
                }))
              }>
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export { PlayListModal };
