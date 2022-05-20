import axios from "axios";

const deleteFromHistory = async (video) => {
  const encodedToken = localStorage.getItem("encodedToken");
  if (encodedToken) {
    try {
      let res = await axios.delete(`/api/user/history/${video._id}`, {
        headers: {
          authorization: encodedToken,
        },
      });
    } catch (err) {
      console.error(err);
    }
  }
};

export { deleteFromHistory };
