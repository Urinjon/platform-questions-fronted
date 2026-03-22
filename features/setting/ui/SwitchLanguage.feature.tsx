"use client";

import { getLocale, setLocale } from "@paraglide/runtime";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@ui-kit/ui/select";
import { Languages } from "lucide-react";
import { m } from "@paraglide/messages";
import { type Language, languageNames } from "../model/language.types";
import { useRouter } from "next/navigation";

export const SwitchLanguage = () => {
	const router = useRouter();

	const changeLanguage = (newLang: Language) => {
		setLocale(newLang, { reload: false });

		router.refresh();

		//import("@paraglide/runtime").then((r) => r.setLocale(newLang));
	};

	return (
		<div className="flex items-center justify-between gap-4 rounded-lg border p-3 hover:bg-accent/50 transition-colors">
			<div className="flex items-center gap-3">
				<Languages className="h-5 w-5 text-muted-foreground" />
				<span className="text-sm font-medium">{m.languageDescription()}</span>
			</div>

			<Select value={getLocale()} onValueChange={changeLanguage}>
				<SelectTrigger className="w-[160px]">
					<SelectValue placeholder="Выберите язык" />
				</SelectTrigger>
				<SelectContent>
					{Object.entries(languageNames).map(([code, name]) => (
						<SelectItem key={code} value={code}>
							{name}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};
