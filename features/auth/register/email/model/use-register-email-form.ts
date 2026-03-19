import { useForm } from "react-hook-form";
import { type RegisterFormValues, registerSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterEmailAdapter } from "../api/use-register-email.adapter";
import type { RegisterEmailDto } from "./types";

const formatLocal = (date: Date): string => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

export const useRegisterEmailForm = () => {
  const { mutateAsync, isPending } = useRegisterEmailAdapter();

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      email: "",
      birthday: new Date(1999, 11, 20),
      username: "",
    },
  });

  const onSubmit = form.handleSubmit(async (data: RegisterFormValues) => {
    try {
      const dto: RegisterEmailDto = {
        first_name: data.firstName,
        last_name: data.lastName,
        password: data.password,
        email: data.email,
        birthday: formatLocal(data.birthday),
        username: data.username,
      };

      await mutateAsync(dto);
    } catch {}
  });

  return {
    onSubmit,
    form,
    isLoading: isPending,
  };
};
