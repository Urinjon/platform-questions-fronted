"use client";

import { Button } from "@ui-kit/ui/button";
import {
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardInDevelopment,
	CardTitle,
} from "@ui-kit/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@ui-kit/ui/form";
import { Input } from "@ui-kit/ui/input";

import {
	ArrowLeftIcon,
	CalendarIcon,
	ScanFaceIcon,
	UserPlusIcon,
} from "lucide-react";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Space } from "@ui-kit/ui/space";
import { Calendar } from "@ui-kit/ui/calendar";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@ui-kit/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@ui-kit/ui/popover";
import {
	type RegisterFormValues,
	registerSchema,
	universityList,
} from "../config";

export const RegisterForm: React.FC = () => {
	const form = useForm<RegisterFormValues>({
		resolver: zodResolver(registerSchema),
		mode: "onChange",
		defaultValues: {
			firstName: "",
			lastName: "",
			password: "",
			confirmPassword: "",
			phone: "",
			university: "",
			birthday: new Date(),
		},
	});

	const onSubmit = form.handleSubmit((data) => {
		console.log(data);
	});

	return (
		<div className="flex w-full max-w-sm flex-col gap-6">
			<CardInDevelopment className="w-full max-w-sm">
				<CardHeader>
					<CardTitle>Создать аккаунт</CardTitle>
					<CardDescription>
						Введите все поля ниже, чтобы создать аккаунт
					</CardDescription>
					<CardAction>
						<Button variant="link">
							<ScanFaceIcon />
							<Link href="/auth/login">Войти</Link>
						</Button>
					</CardAction>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form onSubmit={onSubmit} className="space-y-8">
							<FormField
								control={form.control}
								name="phone"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Номер телефона</FormLabel>
										<FormControl>
											<Input placeholder="+998" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<Space gap={4}>
								<FormField
									control={form.control}
									name="password"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Пароль</FormLabel>
											<FormControl>
												<Input
													placeholder="*******"
													type="password"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="confirmPassword"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Подтвердите пароль</FormLabel>
											<FormControl>
												<Input
													placeholder="*******"
													type="password"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</Space>

							<Space gap={4}>
								<FormField
									control={form.control}
									name="lastName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Фамилия</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="firstName"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Имя</FormLabel>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</Space>

							<Space gap={4}>
								<FormField
									control={form.control}
									name="birthday"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Дата рождения</FormLabel>
											<FormControl>
												<Popover>
													<PopoverTrigger asChild>
														<Button variant="outline">
															<CalendarIcon /> {field.value.getFullYear()}/
															{field.value.getMonth() + 1}/
															{field.value.getDate()}
														</Button>
													</PopoverTrigger>
													<PopoverContent>
														<Calendar
															mode="single"
															selected={field.value}
															onSelect={field.onChange}
															disabled={(date) =>
																date < new Date("1900-01-01") ||
																date > new Date()
															}
															captionLayout="dropdown"
														/>
													</PopoverContent>
												</Popover>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="university"
									render={({ field }) => (
										<FormItem>
											<FormLabel>ВУЗ</FormLabel>
											<FormControl>
												<Select
													onValueChange={field.onChange}
													defaultValue={field.value}
												>
													<SelectTrigger>
														<SelectValue placeholder="Выберите университет" />
													</SelectTrigger>
													<SelectContent>
														{universityList.map((university: string) => (
															<SelectItem key={university} value={university}>
																{university}
															</SelectItem>
														))}
													</SelectContent>
												</Select>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</Space>

							<Button type="submit" className="w-full">
								<UserPlusIcon /> Зарегистрироваться
							</Button>
						</form>
					</Form>
				</CardContent>
				<CardFooter className="flex-col gap-2">
					<Link href="/auth/login">
						<Button type="button" className="w-full" variant="outline">
							<ArrowLeftIcon /> Назад
						</Button>
					</Link>
				</CardFooter>
			</CardInDevelopment>
		</div>
	);
};
