import { Button } from "@ui-kit/ui/button";
import { Card, CardContent, CardFooter } from "@ui-kit/ui/card";

import { Space } from "@ui-kit/ui/space";
import { ArrowLeftIcon, AtSignIcon } from "lucide-react";
import Image from "next/image";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@ui-kit/ui/form";
import { Input } from "@ui-kit/ui/input";
import { LoginHeaderCard } from "../../ui/LoginHeaderCard";

import Link from "next/link";

import { useLoginEmailForm } from "../model/use-login-email-form";
import { Spinner } from "@ui-kit/ui/spinner";

export const LoginViaEmail = () => {
	const { form, onSubmit, isLoading } = useLoginEmailForm();

	return (
		<Card>
			<LoginHeaderCard />
			<CardContent className="flex flex-col gap-3">
				<Form {...form}>
					<form onSubmit={onSubmit} className="space-y-8">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Электронная почта</FormLabel>
									<FormControl>
										<Input
											placeholder="example@example.com"
											type="email"
											{...field}
										/>
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
						<Button type="submit" className="w-full" disabled={isLoading}>
							{isLoading ? <Spinner /> : <AtSignIcon />} Вход
						</Button>
					</form>
				</Form>
			</CardContent>
			<CardFooter>
				<Space axios="col" gap={3} fullWidth>
					<Button variant="outline" className="w-full">
						<Image
							src="/brands/google-icon.png"
							alt="Google"
							width={24}
							height={24}
						/>
						Войти с помощью Google
					</Button>
					<Button variant="outline" className="w-full">
						<Image
							src="/brands/yandex-icon.png"
							alt="Yandex"
							width={24}
							height={24}
						/>
						Войти с помощью Yandex
					</Button>
					<Button asChild variant="outline" className="w-full">
						<Link href="/">
							<ArrowLeftIcon className="mr-2" />
							Назад
						</Link>
					</Button>
				</Space>
			</CardFooter>
		</Card>
	);
};
