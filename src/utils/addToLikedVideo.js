import axios from "axios";

const addToLikedVideo = async (video) => {
  const encodedToken = localStorage.getItem("encodedToken");
  if (encodedToken) {
    try {
      let res = await axios.post(
        "/api/user/likes",
        { video },
        { headers: { authorization: encodedToken } },
      );
    } catch (err) {
      console.error(err);
    }
  }
};

export { addToLikedVideo };
