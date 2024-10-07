import { Constants } from "api/constant";
import axios from "axios";

export const post = (data) => {
  return axios.post(Constants.form.endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
