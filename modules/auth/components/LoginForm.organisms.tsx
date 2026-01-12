"use client";

import { Button } from "@shared/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@shared/ui/card";
import { Input } from "@shared/ui/input";
import { Label } from "@shared/ui/label";
import { ScanFaceIcon } from "lucide-react";
import Link from "next/link";

export function LoginForm() {
	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle>Войти</CardTitle>
				<CardDescription>
					Чтобы продолжить, войдите в свою учетную запись
				</CardDescription>
				<CardAction>
					<Button variant="link">
						<ScanFaceIcon /> Регистрация
					</Button>
				</CardAction>
			</CardHeader>
			<CardContent>
				<form>
					<div className="flex flex-col gap-6">
						<div className="grid gap-2">
							<Label htmlFor="email">Почта</Label>
							<Input
								id="email"
								type="email"
								placeholder="m@example.com"
								required
							/>
						</div>
						<div className="grid gap-2">
							<div className="flex items-center">
								<Label htmlFor="password">Пароль</Label>
								<Link
									href="#"
									className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
								>
									Забыли пароль?
								</Link>
							</div>
							<Input id="password" type="password" required />
						</div>
					</div>
				</form>
			</CardContent>
			<CardFooter className="flex-col gap-2">
				<Button type="submit" className="w-full">
					Вход
				</Button>
				<Button variant="outline" className="w-full">
					Войти с помощью Google
				</Button>
			</CardFooter>
		</Card>
	);
}
