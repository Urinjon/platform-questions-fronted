import { HomeIcon, InboxIcon, InfoIcon, UserIcon } from "lucide-react";

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
