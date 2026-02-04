// "use client";

// import {
// 	Select,
// 	SelectContent,
// 	SelectGroup,
// 	SelectItem,
// 	SelectLabel,
// 	SelectTrigger,
// 	SelectValue,
// } from "@ui-kit/ui/select";
// import { Space } from "@ui-kit/ui/space";
// import { LanguagesIcon } from "lucide-react";
// import { useState } from "react";

// type Language = "ru" | "en" | "uz";

// export const SwitchLanguage = () => {
// 	const [language, setLanguage] = useState<Language>("en");

// 	const handleLanguageChange = (newLanguage: Language) => {
// 		setLanguage(newLanguage);
// 		console.log(newLanguage);
// 	};

// 	return (
// 		<Space align="center" gap={3}>
// 			<LanguagesIcon /> Языки:
// 			<Select value={language} onValueChange={handleLanguageChange}>
// 				<SelectTrigger className="w-[180px]">
// 					<SelectValue placeholder="Выберети язык" />
// 				</SelectTrigger>
// 				<SelectContent>
// 					<SelectGroup>
// 						<SelectLabel>
// 							<Space align="center" gap={3}>
// 								<LanguagesIcon size={16} /> Языки:
// 							</Space>
// 						</SelectLabel>
// 						<SelectItem value="ru">RU</SelectItem>
// 						<SelectItem value="en">EN</SelectItem>
// 						<SelectItem value="uz">UZ</SelectItem>
// 					</SelectGroup>
// 				</SelectContent>
// 			</Select>
// 		</Space>
// 	);
// };

"use client";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@ui-kit/ui/select";
import { Languages } from "lucide-react";
import { useState } from "react";

type Language = "ru" | "en" | "uz";

const languageNames: Record<Language, string> = {
	ru: "Русский",
	en: "English",
	uz: "O‘zbek",
};

export const SwitchLanguage = () => {
	const [language, setLanguage] = useState<Language>("ru");

	return (
		<div className="flex items-center justify-between gap-4 rounded-lg border p-3 hover:bg-accent/50 transition-colors">
			<div className="flex items-center gap-3">
				<Languages className="h-5 w-5 text-muted-foreground" />
				<span className="text-sm font-medium">Язык интерфейса</span>
			</div>

			<Select
				value={language}
				onValueChange={(v) => setLanguage(v as Language)}
			>
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
