import axios from "axios";
import { DeletePlaylist } from "types/util-types";
import { triggerToast } from "./triggerToast";

const deletePlaylist: DeletePlaylist = async (playlist) => {
  const encodedToken = localStorage.getItem("encodedToken");
  if (encodedToken) {
    try {
      await axios.delete(`/api/user/playlists/${playlist._id}`, {
        headers: { authorization: encodedToken },
      });
      triggerToast("success", "Playlist Deleted");
    } catch (err) {
      console.error(err);
    }
  }
};

export { deletePlaylist };
