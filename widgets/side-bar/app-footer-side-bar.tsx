"use client";

import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@ui-kit/ui/dropdown-menu";
import {
	SidebarFooter,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@ui-kit/ui/sidebar";
import { ChevronUpIcon, LogOutIcon, User2Icon } from "lucide-react";
import { useAuthStore } from "@features/auth/auth.store";

export const AppFooterSideBar: React.FC = () => {
	const user = useAuthStore((state) => state.user);

	return (
		<SidebarFooter>
			<SidebarMenu>
				<SidebarMenuItem>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<SidebarMenuButton>
								<User2Icon /> {user?.username ?? "Аккаунт"}
								<ChevronUpIcon className="ml-auto" />
							</SidebarMenuButton>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							side="top"
							className="w-[--radix-popper-anchor-width]"
						>
							<DropdownMenuItem asChild>
								<Link href="/profile">
									<User2Icon className="size-4" />
									Профиль
								</Link>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<LogOutIcon className="size-4" />
								Выйти
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarFooter>
	);
};
