import axios from "axios";
import { AddToHistory } from "types/util-types";

const addToHistory: AddToHistory = async (video) => {
  const encodedToken = localStorage.getItem("encodedToken");
  if (encodedToken) {
    try {
      await axios.post(
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
