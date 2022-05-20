import axios from "axios";

const addToWatchlater = async (video) => {
  const encodedToken = localStorage.getItem("encodedToken");
  if (encodedToken) {
    try {
      let res = await axios.post(
        "/api/user/watchlater",
        { video },
        { headers: { authorization: encodedToken } },
      );
    } catch (err) {
      console.error(err);
    }
  }
};

export { addToWatchlater };
