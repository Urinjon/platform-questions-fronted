import {
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@ui-kit/ui/sidebar";
import { SettingModal } from "@widgets/setting";
import { SettingsIcon } from "lucide-react";

import { m } from "@paraglide/messages";
import { getSideBarLinks } from "../model/side-bar.data";

export const AppContentSideBar: React.FC = async () => {
	const SideBarLinks = getSideBarLinks();

	return (
		<SidebarContent>
			<SidebarGroup>
				<SidebarGroupLabel>{m.sidebarNav()}</SidebarGroupLabel>
				<SidebarGroupContent>
					<SidebarMenu>
						{SideBarLinks.map((item) => (
							<SidebarMenuItem key={item.title}>
								<SidebarMenuButton asChild>
									<a href={item.url}>
										<item.icon />
										<span>{item.title}</span>
									</a>
								</SidebarMenuButton>
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>

			<SidebarGroup>
				<SidebarGroupLabel>{m.sidebarSettings()}</SidebarGroupLabel>
				<SidebarGroupContent>
					<SidebarMenu>
						<SidebarMenuItem>
							<SettingModal>
								<SidebarMenuButton>
									<SettingsIcon /> {m.sidebarSettings()}
								</SidebarMenuButton>
							</SettingModal>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>
		</SidebarContent>
	);
};
