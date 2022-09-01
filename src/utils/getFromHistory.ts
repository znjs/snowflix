import axios from "axios";
import { GetFromHistory } from "types/util-types";

const getFromHistory: GetFromHistory = async () => {
  const encodedToken = localStorage.getItem("encodedToken");
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
