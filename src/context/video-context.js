import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";

const VideoContext = createContext();

const videoReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_VIDEO":
      return {
        ...state,
        videos: [...action.payload.videoList],
        default: [...action.payload.videoList],
      };
    case "UPDATE_FILTER":
      return state;
    case "SEARCH_VIDEO":
      if (!!action.payload.searchText) {
        return {
          ...state,
          videos: state.default.filter((video) =>
            video.title.toLowerCase().includes(action.payload.searchText.toLowerCase()),
          ),
        };
      } else {
        return {
          ...state,
          videos: [...state.default],
        };
      }
    default:
      return state;
  }
};

const initialState = {
  videos: [],
  default: [],
  filter: "",
};

const VideoProvider = ({ children }) => {
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
    <VideoContext.Provider value={{ videoDispatch, videoState, displayLoader, setDisplayLoader }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);
export { VideoProvider, useVideo };
