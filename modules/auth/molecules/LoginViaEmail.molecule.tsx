import { Button } from "@ui-kit/ui/button";
import { Card, CardContent, CardFooter } from "@ui-kit/ui/card";

import { Space } from "@ui-kit/ui/space";
import { AtSignIcon } from "lucide-react";
import Image from "next/image";

import { useForm } from "react-hook-form";
import { type LoginEmailFormValues, loginEmailSchema } from "../auth.config";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@ui-kit/ui/form";
import { Input } from "@ui-kit/ui/input";
import { LoginHeaderCard } from "../atoms/LoginHeaderCard.atom";

export const LoginViaEmail = () => {
	const form = useForm<LoginEmailFormValues>({
		resolver: zodResolver(loginEmailSchema),
		mode: "onChange",
	});

	const onSubmit = form.handleSubmit((data) => {
		console.log(data);
	});

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
						<Button type="submit" className="w-full">
							<AtSignIcon /> Вход
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
				</Space>
			</CardFooter>
		</Card>
	);
};
