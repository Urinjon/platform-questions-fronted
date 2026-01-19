import { Button } from "@ui-kit/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@ui-kit/ui/card";

import { Space } from "@ui-kit/ui/space";
import { TicketCheckIcon } from "lucide-react";
import Image from "next/image";

export const LoginViaEmail = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>
					<Space gap={2} align="center">
						<TicketCheckIcon />
						<p>Войти с помощью</p>
					</Space>
				</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col gap-3">
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
			</CardContent>
			<CardFooter></CardFooter>
		</Card>
	);
};
