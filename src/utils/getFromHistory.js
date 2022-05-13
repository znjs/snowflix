import axios from "axios";

const getFromHistory = async () => {
  const encodedToken = JSON.parse(localStorage.getItem("encodedToken"));
  if (encodedToken) {
    try {
      let res = await axios.get("/api/user/history", {
        headers: { authorization: encodedToken },
      });
      if (res.status === 200) return res.data.history;
    } catch (err) {
      console.error(err);
    }
  }
};

export { getFromHistory };
