import axios from "axios";

const removeVideoFromPlaylist = (playlistID, video) => {
  const encodedToken = JSON.parse(localStorage.getItem("encodedToken"));
  const { _id: videoId } = video;
  if (encodedToken) {
    try {
      (async () => {
        let res = await axios.delete(`/api/user/playlists/${playlistID}/${videoId}`, {
          headers: { authorization: encodedToken },
        });
      })();
    } catch (err) {
      console.error(err);
    }
  }
};

export { removeVideoFromPlaylist };
