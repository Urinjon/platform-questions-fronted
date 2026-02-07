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

import { Spinner } from "@ui-kit/ui/spinner";
import { useAuthProvider } from "@features/auth/auth.provider";
import { useAuthStore } from "@features/auth/auth.store";

export const UserMenuDropdown = () => {
	const { handleLogout } = useUserMenu();

	const { isLoading } = useAuthProvider();
	const { user } = useAuthStore();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">
					{isLoading ? <Spinner /> : <UserIcon />} {user?.username}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={handleLogout}>Выход</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
