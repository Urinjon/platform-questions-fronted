"use client";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@ui-kit/ui/select";
import { Space } from "@ui-kit/ui/space";
import { LanguagesIcon } from "lucide-react";
import { useState } from "react";

type Language = "ru" | "en" | "uz";

export const SwitchLanguage = () => {
	const [language, setLanguage] = useState<Language>("en");

	const handleLanguageChange = (newLanguage: Language) => {
		setLanguage(newLanguage);
		console.log(newLanguage);
	};

	return (
		<Space align="center" gap={3}>
			<LanguagesIcon /> Языки:
			<Select value={language} onValueChange={handleLanguageChange}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Выберети язык" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>
							<Space align="center" gap={3}>
								<LanguagesIcon size={16} /> Языки:
							</Space>
						</SelectLabel>
						<SelectItem value="ru">RU</SelectItem>
						<SelectItem value="en">EN</SelectItem>
						<SelectItem value="uz">UZ</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</Space>
	);
};
