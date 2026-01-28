import { SideBarLinks } from "@shared/config/routing.config";
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

export const AppContentSideBar: React.FC = () => {
	return (
		<SidebarContent>
			<SidebarGroup>
				<SidebarGroupLabel>Навигация</SidebarGroupLabel>
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
				<SidebarGroupLabel>Настройки</SidebarGroupLabel>
				<SidebarGroupContent>
					<SidebarMenu>
						<SidebarMenuItem>
							<SettingModal>
								<SidebarMenuButton>
									<SettingsIcon /> Кастомизация
								</SidebarMenuButton>
							</SettingModal>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>
		</SidebarContent>
	);
};
