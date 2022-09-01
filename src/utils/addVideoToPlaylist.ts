import axios from "axios";
import { AddVideoToPlaylist } from "types/util-types";
import { triggerToast } from "./triggerToast";

const addVideoToPlaylist: AddVideoToPlaylist = async (playlistID, video) => {
  const encodedToken = localStorage.getItem("encodedToken");
  if (encodedToken) {
    try {
      await axios.post(
        `/api/user/playlists/${playlistID}`,
        { video },
        { headers: { authorization: encodedToken } },
      );
      triggerToast("success", "Video added to Playlist");
    } catch (err) {
      console.error(err);
    }
  }
};

export { addVideoToPlaylist };
