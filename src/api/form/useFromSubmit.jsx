import { useMutation } from "@tanstack/react-query";
import { formDto } from "./formDto";
import { post } from "./httpRequests";

const className = "[useFormSubmit]";
export const useFormSubmit = () => {
  const mutation = useMutation({
    mutationFn: async (data) => {
      return await post(data);
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
  const isSubmitting = mutation.isPending;
  const response = mutation.data;
  return {
    submitForm,
    isSubmitting,
    response,
    ...mutation,
  };
};
