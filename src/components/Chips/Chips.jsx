import React from "react";
import { SingleChip } from "../SingleChip/SingleChip";

const CATEGORIES = ["All", "decorations", "songs", "movies", "facts", "stories"];

function Chips() {
  return (
    <div className=" mg-i-4 mg-b-1 pd-i-1 pd-b-05 fx fx-jc-se">
      {CATEGORIES.map((chip) => (
        <SingleChip name={chip} key={chip} />
      ))}
    </div>
  );
}

export { Chips };
