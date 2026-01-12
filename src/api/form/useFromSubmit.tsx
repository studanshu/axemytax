import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { formDto } from "./formDto";
import { post } from "./httpRequests";

interface FormSubmitReturn {
  submitForm: (data: any) => Promise<void>;
  isSubmitting: boolean;
  response: Response | undefined;
  mutation: UseMutationResult<Response, Error, any, unknown>;
}

export const useFormSubmit = (): FormSubmitReturn & UseMutationResult<Response, Error, any, unknown> => {
  const mutation = useMutation<Response, Error, any>({
    mutationFn: async (data: any) => {
      return await post(data);
    },
  });

  const submitForm = async (data: any): Promise<void> => {
    const transformedData = formDto(data);
    await mutation.mutate(transformedData);
  };

  const isSubmitting = mutation.isPending;
  const response = mutation.data;

  return {
    submitForm,
    isSubmitting,
    response,
    mutation,
    ...mutation,
  };
};
