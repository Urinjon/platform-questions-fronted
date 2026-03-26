import {
	SidebarHeader,
	SidebarMenu,
	SidebarMenuItem,
} from "@ui-kit/ui/sidebar";
import { Logo } from "@shared/ui/Logo";

export const AppHeaderSideBar: React.FC = () => {
	return (
		<SidebarHeader>
			<SidebarMenu>
				<SidebarMenuItem>
					<Logo />
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarHeader>
	);
};
