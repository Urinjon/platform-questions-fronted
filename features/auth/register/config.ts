import z from "zod";
import { phoneRegex } from "../auth.util";

export const universityList = ["TDTU"];

export const registerSchema = z
	.object({
		phone: z
			.string("Номер телефона не может быть пустым")
			.regex(phoneRegex, "Неверная структура номера телефона")
			.min(13, "Неверный номер телефона")
			.nonempty("Номер телефона не может быть пустым"),
		password: z.string().min(8, "Минимум 8 символов"),
		confirmPassword: z.string().min(8, "Минимум 8 символов"),
		lastName: z
			.string("Фамилия не может быть пустой")
			.nonempty("Фамилия не может быть пустой"),
		firstName: z
			.string("Имя не может быть пустым")
			.nonempty("Имя не может быть пустым"),
		birthday: z
			.date("Дата рождения не может быть пустой")
			.min(new Date(1900, 0, 1), "Дата рождения не может быть раньше 1900 года")
			.max(new Date(), "Дата рождения не может быть в будущем"),
		university: z.string().refine((value) => universityList.includes(value), {
			message: "Неверное название университета",
			path: ["university"],
		}),
	})
	.superRefine((data, ctx) => {
		if (data.password !== data.confirmPassword) {
			ctx.addIssue({
				path: ["confirmPassword"],
				message: "Пароли не совпадают",
				code: z.ZodIssueCode.custom,
			});
		}
	});

export type RegisterFormValues = z.infer<typeof registerSchema>;
