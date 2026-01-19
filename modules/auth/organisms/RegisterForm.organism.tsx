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
import { Space } from "@ui-kit/ui/space";
import { ScanFaceIcon } from "lucide-react";
import Link from "next/link";

export const RegisterForm: React.FC = () => {
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
					<form>
						<div className="flex flex-col gap-6">
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									placeholder="m@example.com"
									required
								/>
							</div>
							<Space as="section" gap={4}>
								<div className="grid gap-2">
									<Label htmlFor="password">Password</Label>
									<Input id="password" type="password" required />
								</div>
								<div className="grid gap-2">
									<Label htmlFor="password-repeat">Repeat Password</Label>
									<Input id="password-repeat" type="password" required />
								</div>
							</Space>

							<Space as="section" gap={4}>
								<div className="grid gap-2">
									<Label htmlFor="name">Name</Label>
									<Input id="name" type="text" required />
								</div>
								<div className="grid gap-2">
									<Label htmlFor="surname">Surname</Label>
									<Input id="surname" type="text" required />
								</div>
							</Space>

							<Space as="section" gap={4}>
								<div className="grid gap-2">
									<Label htmlFor="phone">Phone</Label>
									<Input id="phone" type="tel" required />
								</div>
								<div className="grid gap-2">
									<Label htmlFor="birth">Birth Date</Label>
									<Input id="birth" type="date" required />
								</div>
							</Space>

							<div className="grid gap-2">
								<Label htmlFor="branch">Вуз</Label>
								<Input id="branch" type="text" required />
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className="flex-col gap-2">
					<Button type="submit" className="w-full">
						Зарегистрироваться
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
};
