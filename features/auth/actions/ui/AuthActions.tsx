"use client";

import { Button } from "@ui-kit/ui/button";
import { Space } from "@ui-kit/ui/space";
import Link from "next/link";

export const AuthActions: React.FC = () => {
	return (
		<Space gap={3}>
			<Link href="/auth/login">
				<Button variant={"outline"}>Войти</Button>
			</Link>
			<Link href="/auth/register">
				<Button variant={"default"}>Зарегистрироваться</Button>
			</Link>
		</Space>
	);
};
