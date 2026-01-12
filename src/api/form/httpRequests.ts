import { Constants } from "api/constant";

export const post = async (data: any): Promise<Response> => {
  return await fetch(Constants.form.endpoint || "", {
    method: "POST",
    mode: "no-cors",
    redirect: "follow",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
