import { Video } from "./video-types";

export type AddToHistory = (video: Video) => Promise<void>;
export type AddToLikedVideo = (video: Video) => Promise<void>;
export type AddToWatchlater = (video: Video) => Promise<void>;
export type AddVideoToPlaylist = (playlistID: string, video: Video) => Promise<void>;
export type ClearHistory = () => Promise<void>;
export type CreateNewPlaylist = (name: string) => Promise<void>;
export type DeleteFromHistory = (video: Video) => Promise<void>;
export type DeleteFromLiked = (video: Video) => Promise<void>;
export type DeletePlaylist = (playlist: any) => Promise<void>;
export type GetFromHistory = () => Promise<Video[]>;
export type RemoveFromWacthlater = (video: Video) => Promise<void>;
export type RemoveVideoFromPlaylist = (playlistID: string, video: Video) => Promise<void>;
export type TriggerToast = (type: string, message: string) => void;
