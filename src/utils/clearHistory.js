import axios from "axios";

const clearHistory = async () => {
  const encodedToken = JSON.parse(localStorage.getItem("encodedToken"));
  if (encodedToken) {
    try {
      let res = await axios.delete("/api/user/history/all", {
        headers: { authorization: encodedToken },
      });
    } catch (err) {
      console.error(err);
    }
  }
};

export { clearHistory };
