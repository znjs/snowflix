import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useVideo } from "../../context";
import { LikedCard } from "../LikedCard/LikedCard";
import "./likedVideo.css";

function LikedVideo() {
  const navigate = useNavigate();
  const encodedToken = localStorage.getItem("encodedToken");
  const [likedVideos, setLikedVideos] = useState([]);
  const [changeLikedFlag, setChangeLikedFlag] = useState(false);
  const { setDisplayLoader } = useVideo();
  useEffect(() => {
    if (encodedToken) {
      setDisplayLoader(true);
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
        setDisplayLoader(false);
      })();
    } else {
      setDisplayLoader(false);
    }
  }, [changeLikedFlag]);

  return (
    <div className="pd-2 likedVideo clr-gray-50 fx-grow">
      <h2>Liked Videos</h2>
      {likedVideos.length > 0 ? (
        likedVideos.map((video) => (
          <LikedCard video={video} key={video._id} flagChange={setChangeLikedFlag} />
        ))
      ) : (
        <div className="ta-center mg-b-2">
          <p className="f-105">Your Liked Videos is Empty</p>
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

export { LikedVideo };
