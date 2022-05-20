import axios from "axios";

const deletePlaylist = async (playlist) => {
  const encodedToken = localStorage.getItem("encodedToken");
  if (encodedToken) {
    try {
      let res = await axios.delete(`/api/user/playlists/${playlist._id}`, {
        headers: { authorization: encodedToken },
      });
    } catch (err) {
      console.error(err);
    }
  }
};

export { deletePlaylist };
