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
import { Label } from "@ui-kit/ui/label";
import { ScanFaceIcon, UserIcon } from "lucide-react";
import Link from "next/link";

export const EmailAndPassword = () => {
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
					<UserIcon /> Вход
				</Button>
			</CardFooter>
		</Card>
	);
};
