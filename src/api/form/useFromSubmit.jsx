import { useMutation } from "@tanstack/react-query";
import { post } from "./axiosInterface";
import { formDto } from "./formDto";

const className = "[useFormSubmit]";
export const useFormSubmit = () => {
  const mutation = useMutation({
    mutationFn: (data) => {
      console.log("env", process.env);
      return post(data);
    },
  });

  const submitForm = async (data) => {
    try {
      const transformedData = formDto(data);
      console.log(className, "Submit Form Data", transformedData);
      await mutation.mutate(transformedData);
    } catch (error) {
      console.error(className, "Error submitting form:", error);
    }
  };

  return {
    submitForm,
    ...mutation,
  };
};
