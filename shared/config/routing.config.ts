import {
	ClipboardListIcon,
	Home,
	Inbox,
	KeyRoundIcon,
	type LucideIcon,
	Settings,
} from "lucide-react";

export const SideBarLinks = [
	{
		title: "Главная",
		url: "/",
		icon: Home,
	},
	{
		title: "Вопросы",
		url: "/student/questions",
		icon: Inbox,
	},
	{
		title: "Настройки",
		url: "/settings",
		icon: Settings,
	},
];

export const NewFeaturesLinks: {
	title: string;
	href: string;
	description: string;
	icon: LucideIcon;
}[] = [
	{
		title: "Задачи",
		href: "/tasks",
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
