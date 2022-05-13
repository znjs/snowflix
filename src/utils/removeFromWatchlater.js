import axios from "axios";

const removeFromWacthlater = async (video) => {
  const encodedToken = JSON.parse(localStorage.encodedToken);
  if (encodedToken) {
    try {
      let res = await axios.delete(`/api/user/watchlater/${video._id}`, {
        headers: { authorization: encodedToken },
      });
    } catch (err) {
      console.error(err);
    }
  }
};

export { removeFromWacthlater };
