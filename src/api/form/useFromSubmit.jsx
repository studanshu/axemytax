import { useMutation } from "react-query";
import { post } from "./axiosInterface";
import { formDto } from "./formDto";

const className = "[useFormSubmit]";
export const useFormSubmit = () => {
  const mutation = useMutation(async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const transformedData = formDto(data);
    // console.log(className, "Transformed Data", transformedData);
    return await post(transformedData);
  });

  const submitForm = async (data) => {
    try {
      // console.log(className, "Submit Form Data", data);
      await mutation.mutate(data);
    } catch (error) {
      console.error(className, "Error submitting form:", error);
    }
  };

  return {
    submitForm,
    ...mutation,
  };
};
