import axios from "axios";
import { triggerToast } from "./triggerToast";

const createNewPlaylist = async (name) => {
  const encodedToken = localStorage.getItem("encodedToken") || "";
  if (encodedToken) {
    try {
      let res = await axios.post(
        "/api/user/playlists",
        { playlist: { title: name, description: "" } },
        { headers: { authorization: encodedToken } },
      );
      triggerToast("success", "New playlist created");
    } catch (err) {
      console.error(err);
    }
  }
};

export { createNewPlaylist };
