import { ClipboardListIcon, KeyRoundIcon, type LucideIcon } from "lucide-react";

export const NewFeaturesLinks: {
	title: string;
	href: string;
	description: string;
	icon: LucideIcon;
}[] = [
	{
		title: "Вопросы",
		href: "/questions",
		description: "Управление задачами. Создание, редактирование, удаление.",
		icon: ClipboardListIcon,
	},
	{
		title: "Регистрация/Вход",
		href: "/auth/login",
		description: "Регистрация и вход в систему.",
		icon: KeyRoundIcon,
	},
];
