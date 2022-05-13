import React from "react";
import { useVideo } from "../../context/video-context";
import "./singleChip.css";

function SingleChip({ name = "NoName" }) {
  const { videoDispatch } = useVideo();
  return (
    <span
      onClick={() => videoDispatch({ type: "UPDATE_FILTER", payload: { filter: name } })}
      className="clr-gray-50 bg-clr-gray-900 pd-05 chip select-none cr-pt pd-i-1">
      {name}
    </span>
  );
}

export { SingleChip };
