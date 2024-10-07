import { useMutation } from "@tanstack/react-query";
import { post } from "./axiosInterface";
import { formDto } from "./formDto";

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
  return {
    submitForm,
    isSubmitting,
    ...mutation,
  };
};
