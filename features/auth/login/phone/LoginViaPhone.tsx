"use client";

import { Button } from "@ui-kit/ui/button";
import { Card, CardContent, CardFooter } from "@ui-kit/ui/card";

import { Input } from "@ui-kit/ui/input";

import {
	ArrowLeftIcon,
	CircleQuestionMarkIcon,
	SmartphoneIcon,
} from "lucide-react";

import Link from "next/link";

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

import { type LoginPhoneFormValues, loginPhoneSchema } from "../config";
import { LoginHeaderCard } from "../ui/LoginHeaderCard";

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
			<LoginHeaderCard />
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
							<SmartphoneIcon /> Вход
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
