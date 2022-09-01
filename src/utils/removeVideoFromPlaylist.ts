import axios from "axios";
import { RemoveVideoFromPlaylist } from "types/util-types";
import { triggerToast } from "./triggerToast";

const removeVideoFromPlaylist: RemoveVideoFromPlaylist = async (playlistID, video) => {
  const encodedToken = localStorage.getItem("encodedToken");
  const { _id: videoId } = video;
  if (encodedToken) {
    try {
      await axios.delete(`/api/user/playlists/${playlistID}/${videoId}`, {
        headers: { authorization: encodedToken },
      });
      triggerToast("success", "Video removed from playlist");
    } catch (err) {
      console.error(err);
    }
  }
};

export { removeVideoFromPlaylist };
