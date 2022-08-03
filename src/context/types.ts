import React from "react";

export type Video = {
  _id: String;
  title: String;
  category: "decorations";
  description: String;
  creator: String;
  likes: Number;
  views: Number;
  date: String;
  time: String;
};

export type VideoState = {
  videos: Video[];
  default: Video[];
  filter: String;
};

export type Action = {
  type: String;
  payload: any;
};

export type DefaultVideoContext = {
  videoState: VideoState;
  videoDispatch: React.Dispatch<Action>;
  displayLoader: Boolean;
  setDisplayLoader: React.Dispatch<React.SetStateAction<boolean>>;
};
