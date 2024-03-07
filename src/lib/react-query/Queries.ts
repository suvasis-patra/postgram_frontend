import { useMutation } from "@tanstack/react-query";
import { NewUser } from "../types";
import { createNewUser } from "../api";

export const useCreateUser = () => {
  const createuserMutation = useMutation({
    mutationFn: (user: NewUser) => createNewUser(user),
  });
  return createuserMutation;
};
