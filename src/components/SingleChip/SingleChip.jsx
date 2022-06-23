import React from "react";
import { useVideo } from "../../context/video-context";
import "./singleChip.css";

function SingleChip({ name = "NoName" }) {
  const { videoDispatch, videoState } = useVideo();
  return (
    <span
      onClick={() => videoDispatch({ type: "UPDATE_FILTER", payload: { filter: name } })}
      className={`${
        videoState.filter === name ? "clr-gray-900 bg-clr-gray-200" : "clr-gray-200 bg-clr-gray-900"
      }  pd-05 chip select-none cr-pt pd-i-1 mg-i-05`}>
      {name}
    </span>
  );
}

export { SingleChip };
