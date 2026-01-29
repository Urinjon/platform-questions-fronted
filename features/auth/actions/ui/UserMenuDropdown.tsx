"use client";

import { Button } from "@ui-kit/ui/button";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@ui-kit/ui/dropdown-menu";

import { UserIcon } from "lucide-react";
import { useUserMenu } from "../hooks/useUserMenu";

export const UserMenuDropdown = () => {
	const { user, handleLogout, goToProfile } = useUserMenu();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">
					<UserIcon /> {user?.username}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={goToProfile}>Профиль</DropdownMenuItem>
				<DropdownMenuItem onClick={handleLogout}>Выход</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
