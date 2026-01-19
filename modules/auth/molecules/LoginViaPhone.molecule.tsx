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

import { Input } from "@ui-kit/ui/input";

import {
	ArrowLeftIcon,
	CircleQuestionMarkIcon,
	ScanFaceIcon,
	UserIcon,
} from "lucide-react";

import Link from "next/link";
import { type LoginPhoneFormValues, loginPhoneSchema } from "../auth.config";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@ui-kit/ui/form";

export const LoginViaPhone: React.FC = () => {
	const form = useForm<LoginPhoneFormValues>({
		resolver: zodResolver(loginPhoneSchema),
		mode: "onChange",
	});

	const onSubmit = form.handleSubmit((data) => {
		console.log(data);
	});

	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle>Войти</CardTitle>
				<CardDescription>
					Чтобы продолжить, войдите в свою учетную запись
				</CardDescription>
				<CardAction>
					<Button variant="link">
						<ScanFaceIcon />
						<Link href="/auth/register">Регистрация</Link>
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
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Пароль</FormLabel>
									<FormControl>
										<Input placeholder="*******" type="password" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit" className="w-full">
							<UserIcon /> Вход
						</Button>
					</form>
				</Form>
			</CardContent>
			<CardFooter className="flex gap-2">
				<Link href={"/"}>
					<Button variant={"secondary"} type="button">
						<ArrowLeftIcon /> Назад
					</Button>
				</Link>
				<Link href={"/auth/forgot-password"}>
					<Button variant={"secondary"} type="button">
						<CircleQuestionMarkIcon /> Забыли пароль?
					</Button>
				</Link>
			</CardFooter>
		</Card>
	);
};
