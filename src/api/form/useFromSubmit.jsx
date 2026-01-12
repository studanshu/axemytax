import { useMutation } from "@tanstack/react-query";
import { formDto } from "./formDto";
import { post } from "./httpRequests";

export const useFormSubmit = () => {
  const mutation = useMutation({
    mutationFn: async (data) => {
      return await post(data);
    },
  });

  const submitForm = async (data) => {
    const transformedData = formDto(data);
    await mutation.mutate(transformedData);
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
