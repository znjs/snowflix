import axios from "axios";

const deleteFromLiked = async (video) => {
  const encodedToken = JSON.parse(localStorage.getItem("encodedToken"));
  if (encodedToken) {
    try {
      let res = await axios.delete(`/api/user/likes/${video._id}`, {
        headers: { authorization: encodedToken },
      });
    } catch (err) {
      console.error(err);
    }
  }
};

export { deleteFromLiked };
