import {
	ClipboardListIcon,
	HomeIcon,
	InboxIcon,
	InfoIcon,
	KeyRoundIcon,
	UserIcon,
	type LucideIcon,
} from "lucide-react";

import * as m from "@paraglide/messages";

export const getSideBarLinks = () => [
	{
		title: m.sidebarHome(),
		url: "/",
		icon: HomeIcon,
	},
	{
		title: m.sidebarQuestions(),
		url: "/questions",
		icon: InboxIcon,
	},
	{
		title: m.sidebarProfile(),
		url: "/profile",
		icon: UserIcon,
	},
	{
		title: m.sidebarHelp(),
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
