import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { videoReducer } from "../reducer";
import { DefaultVideoContext, VideoState } from "./types";

const VideoContext = createContext<DefaultVideoContext | null>(null);

const initialState: VideoState = {
  videos: [],
  default: [],
  filter: "All",
};

const VideoProvider = ({ children }: { children: JSX.Element }) => {
  const [videoState, videoDispatch] = useReducer(videoReducer, initialState);
  const [displayLoader, setDisplayLoader] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get("/api/videos");
        let videoArr = res.data.videos;
        videoDispatch({
          type: "UPDATE_VIDEO",
          payload: { videoList: videoArr },
        });
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <VideoContext.Provider
      value={{
        videoDispatch,
        videoState,
        displayLoader,
        setDisplayLoader,
      }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);
export { VideoProvider, useVideo };
