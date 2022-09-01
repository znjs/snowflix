import { Video } from "./video-types";

export type AsideType = ({ theme }: { theme: string }) => JSX.Element;
export type ExploreCardType = ({
  video,
  setPlaylistModalData,
  setFetchWatchlaterVideos,
  watchlaterVideos,
  key,
}: {
  video: Video;
  setPlaylistModalData: any;
  setFetchWatchlaterVideos: any;
  watchlaterVideos: Video[];
  key: string;
}) => JSX.Element;
export type HistoryCardType = ({
  video,
  flagChange,
  key,
}: {
  video: Video;
  flagChange: any;
  key: string;
}) => JSX.Element;
export type LikedCardType = ({
  video,
  flagChange,
  key,
}: {
  video: Video;
  flagChange: any;
  key: string;
}) => JSX.Element;

export type NavbarType = ({
  theme,
  changeTheme,
}: {
  theme: string;
  changeTheme: any;
}) => JSX.Element;

export type PlaylistCardType = ({
  playlist,
  setFetchPlaylistFlag,
}: {
  playlist: any;
  setFetchPlaylistFlag: any;
}) => JSX.Element;

export type PlaylistModalDataType = {
  showModal: Boolean;
  modalData: {};
  video: Video;
};

export type PlayListModalType = ({
  playlistModalData,
  setPlaylistModalData,
}: {
  playlistModalData: PlaylistModalDataType;
  setPlaylistModalData: any;
}) => JSX.Element;

export type PlaylistVideoCardType = ({
  video,
  playlistId,
  setFetchVideo,
  key,
}: {
  video: Video;
  playlistId: string;
  setFetchVideo: any;
  key: string;
}) => JSX.Element;

export type SingleChipType = ({ name }: { name: string }) => JSX.Element;

export type WatchlaterCardType = ({
  video,
  setFetchWatchlaterFlag,
  key,
}: {
  video: Video;
  setFetchWatchlaterFlag: any;
  key: String;
}) => JSX.Element;
