import { Constants } from "api/constant";
import axios from "axios";

export const post = async (data) => {
  return await axios.post(Constants.form.endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
