import React from "react";
import { ExploreCard } from "../ExploreCard/ExploreCard";
import "./explore.css";

function Explore() {
  return (
    <div className="fx-grow pd-2 fx fx-wrap fx-ai-center fx-jc-se explore">
      <ExploreCard />
      <ExploreCard />
      <ExploreCard />
      <ExploreCard />
      <ExploreCard />
      <ExploreCard />
      <ExploreCard />
      <ExploreCard />
      <ExploreCard />
      <ExploreCard />
      <ExploreCard />
      <ExploreCard />
      <ExploreCard />
      <div className="w-20 brd-sm o-hide clr-gray-50 bg-clr-gray-900 mg-05"></div>
      <div className="w-20 brd-sm o-hide clr-gray-50 bg-clr-gray-900 mg-05"></div>
      <div className="w-20 brd-sm o-hide clr-gray-50 bg-clr-gray-900 mg-05"></div>
      <div className="w-20 brd-sm o-hide clr-gray-50 bg-clr-gray-900 mg-05"></div>
    </div>
  );
}

export { Explore };
