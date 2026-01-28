import { Button } from "@ui-kit/ui/button";
import {
	CardAction,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@ui-kit/ui/card";
import { ScanFaceIcon } from "lucide-react";
import Link from "next/link";

export const LoginHeaderCard: React.FC = () => {
	return (
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
	);
};
