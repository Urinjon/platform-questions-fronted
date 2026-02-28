"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui-kit/ui/tabs";

import { AtSignIcon, SmartphoneIcon } from "lucide-react";
import { RegisterViaEmail } from "../email";
import { CardInDevelopment } from "@ui-kit/ui/card";

export function RegisterForm() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-6">
			<Tabs defaultValue="register-email">
				<TabsList>
					<TabsTrigger value="register-phone">
						<SmartphoneIcon /> Через телефон
					</TabsTrigger>
					<TabsTrigger value="register-email">
						<AtSignIcon /> Через Почту
					</TabsTrigger>
				</TabsList>
				<TabsContent value="register-phone">
					<CardInDevelopment title="Через телефон">
						<RegisterViaEmail />
					</CardInDevelopment>
				</TabsContent>
				<TabsContent value="register-email">
					<RegisterViaEmail />
				</TabsContent>
			</Tabs>
		</div>
	);
}
