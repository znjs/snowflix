import axios from "axios";
import { CreateNewPlaylist } from "types/util-types";
import { triggerToast } from "./triggerToast";

const createNewPlaylist: CreateNewPlaylist = async (name) => {
  const encodedToken = localStorage.getItem("encodedToken") || "";
  if (encodedToken) {
    try {
      await axios.post(
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
