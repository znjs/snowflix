import axios from "axios";

const addToHistory = async (video) => {
  const encodedToken = localStorage.getItem("encodedToken");
  if (encodedToken) {
    try {
      let res = await axios.post(
        "/api/user/history",
        { video },
        {
          headers: {
            authorization: encodedToken,
          },
        },
      );
    } catch (err) {
      console.error(err);
    }
  }
};

export { addToHistory };
