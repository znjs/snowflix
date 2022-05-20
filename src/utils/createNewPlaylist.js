import axios from "axios";

const createNewPlaylist = async (name) => {
  const encodedToken = localStorage.getItem("encodedToken") || "";
  if (encodedToken) {
    try {
      let res = await axios.post(
        "/api/user/playlists",
        { playlist: { title: name, description: "" } },
        { headers: { authorization: encodedToken } },
      );
    } catch (err) {
      console.error(err);
    }
  }
};

export { createNewPlaylist };
