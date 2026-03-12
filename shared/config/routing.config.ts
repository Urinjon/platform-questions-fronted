import {
	ClipboardListIcon,
	HomeIcon,
	InboxIcon,
	InfoIcon,
	KeyRoundIcon,
	UserIcon,
	type LucideIcon,
} from "lucide-react";

export const SideBarLinks = [
	{
		title: "Главная",
		url: "/",
		icon: HomeIcon,
	},
	{
		title: "Вопросы",
		url: "/questions",
		icon: InboxIcon,
	},
	{
		title: "Профиль",
		url: "/profile",
		icon: UserIcon,
	},
	{
		title: "Как пользоваться",
		url: "/help",
		icon: InfoIcon,
	},
];

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
