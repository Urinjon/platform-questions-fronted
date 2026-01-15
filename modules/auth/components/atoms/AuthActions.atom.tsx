"use client";

import { Button } from "@ui-kit/ui/button";
import { Space } from "@ui-kit/ui/space";

export const AuthActions: React.FC = () => {
	return (
		<Space gap={3}>
			<Button variant={"outline"}>Войти</Button>
			<Button variant={"default"}>Зарегистрироваться</Button>
		</Space>
	);
};
