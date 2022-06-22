import axios from "axios";
import { triggerToast } from "./triggerToast";

const addVideoToPlaylist = (playlistID, video) => {
  const encodedToken = localStorage.getItem("encodedToken");
  if (encodedToken) {
    try {
      (async () => {
        let res = await axios.post(
          `/api/user/playlists/${playlistID}`,
          { video },
          { headers: { authorization: encodedToken } },
        );
      })();
      triggerToast("success", "Video added to Playlist");
    } catch (err) {
      console.error(err);
    }
  }
};

export { addVideoToPlaylist };
