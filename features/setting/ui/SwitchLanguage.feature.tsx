"use client";

import { getLocale, setLocale } from "@/paraglide/runtime";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@ui-kit/ui/select";
import { Languages } from "lucide-react";
import * as m from "@/paraglide/messages.js";

type Language = "ru" | "en" | "uz";

const languageNames: Record<Language, string> = {
	ru: "Русский",
	en: "English",
	uz: "O‘zbek",
};

export const SwitchLanguage = () => {
	const language = getLocale();
	const handleLanguageChange = (language: Language) => {
		setLocale(language);
	};

	return (
		<div className="flex items-center justify-between gap-4 rounded-lg border p-3 hover:bg-accent/50 transition-colors">
			<div className="flex items-center gap-3">
				<Languages className="h-5 w-5 text-muted-foreground" />
				<span className="text-sm font-medium">{m.languageDescription()}</span>
			</div>

			<Select value={language} onValueChange={handleLanguageChange}>
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
