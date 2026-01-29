"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui-kit/ui/tabs";

import { AtSignIcon, SmartphoneIcon } from "lucide-react";
import { LoginViaPhone } from "../phone/LoginViaPhone";
import { LoginViaEmail } from "../email";

export function LoginForm() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-6">
			<Tabs defaultValue="login-email">
				<TabsList>
					<TabsTrigger value="login-phone">
						<SmartphoneIcon /> Войти через телефон
					</TabsTrigger>
					<TabsTrigger value="login-email">
						<AtSignIcon /> Войти через Почту
					</TabsTrigger>
				</TabsList>
				<TabsContent value="login-phone">
					<LoginViaPhone />
				</TabsContent>
				<TabsContent value="login-email">
					<LoginViaEmail />
				</TabsContent>
			</Tabs>
		</div>
	);
}
