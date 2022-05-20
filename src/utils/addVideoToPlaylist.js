import axios from "axios";

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
    } catch (err) {
      console.error(err);
    }
  }
};

export { addVideoToPlaylist };
