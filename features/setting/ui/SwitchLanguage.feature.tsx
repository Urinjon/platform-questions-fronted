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
import * as m from "@paraglide/messages.js";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { type Language, languageNames } from "../model/language.types";

export const SwitchLanguage = () => {
	const router = useRouter();

	const [language, setLanguage] = useState<Language>(getLocale());

	const handleLanguageChange = (newLanguage: Language) => {
		setLanguage(newLanguage);
		setLocale(newLanguage, { reload: false });
		router.refresh();
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
