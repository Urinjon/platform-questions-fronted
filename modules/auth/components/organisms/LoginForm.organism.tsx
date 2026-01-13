"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui-kit/ui/tabs";

import { EmailAndPassword } from "../molecules/EmailAndPassword.molecule";
import { AlternativeLoginMethods } from "../molecules/AlternativeLoginMethods.molecule";
import { DoorOpenIcon, TicketCheckIcon } from "lucide-react";
import { BackgroundBeams } from "@ui-kit/effects";

export function LoginForm() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-6">
			<BackgroundBeams />
			<Tabs defaultValue="login-local">
				<TabsList>
					<TabsTrigger value="login-local">
						<DoorOpenIcon /> Войти
					</TabsTrigger>
					<TabsTrigger value="login-alternative">
						<TicketCheckIcon /> Войти с помощью
					</TabsTrigger>
				</TabsList>
				<TabsContent value="login-local">
					<EmailAndPassword />
				</TabsContent>
				<TabsContent value="login-alternative">
					<AlternativeLoginMethods />
				</TabsContent>
			</Tabs>
		</div>
	);
}
