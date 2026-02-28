"use client";

import { Button } from "@ui-kit/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
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

import { useRegisterEmailForm } from "../model/use-register-email-form";
import { universityList } from "../model/schema";
import { Spinner } from "@ui-kit/ui/spinner";

export const RegisterViaEmail: React.FC = () => {
	const { form, onSubmit, isLoading } = useRegisterEmailForm();

	return (
		<div className="flex w-full max-w-sm flex-col gap-6">
			<Card className="w-full max-w-sm">
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
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Электронная почта: </FormLabel>
										<FormControl>
											<Input placeholder="@example.com" {...field} />
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
												<Input placeholder="your last name" {...field} />
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
												<Input placeholder="your first name" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</Space>

							<Space gap={4}>
								<FormField
									control={form.control}
									name="username"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Username</FormLabel>
											<FormControl>
												<Input placeholder="your username" {...field} />
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

							<Button type="submit" className="w-full" disabled={isLoading}>
								{isLoading ? <Spinner /> : <UserPlusIcon />} Зарегистрироваться
							</Button>
						</form>
					</Form>
				</CardContent>
				<CardFooter className="flex-col gap-2 w-full">
					<Link href="/auth/login" className="w-full">
						<Button type="button" className="w-full" variant="outline">
							<ArrowLeftIcon /> Назад
						</Button>
					</Link>
				</CardFooter>
			</Card>
		</div>
	);
};
