import { Logo } from "@shared/ui/logo";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@ui-kit/ui/dropdown-menu";
import {
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@ui-kit/ui/sidebar";

export const AppHeaderSideBar: React.FC = () => {
	return (
		<SidebarHeader>
			<SidebarMenu>
				<SidebarMenuItem>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<SidebarMenuButton>
								<Logo />
							</SidebarMenuButton>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="w-[--radix-popper-anchor-width]">
							<DropdownMenuItem>
								<span>Acme Inc</span>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<span>Acme Corp.</span>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarHeader>
	);
};
