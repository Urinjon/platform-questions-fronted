import { Logo } from "@shared/ui/logo";

import {
	SidebarHeader,
	SidebarMenu,
	SidebarMenuItem,
} from "@ui-kit/ui/sidebar";

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
