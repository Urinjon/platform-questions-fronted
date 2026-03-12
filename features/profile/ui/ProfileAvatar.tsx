"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@ui-kit/ui/avatar";
import type { User } from "@entities/user";

interface ProfileAvatarProps {
	user: User | null;
	size?: "sm" | "md" | "lg";
}

const sizeClasses = {
	sm: "size-12",
	md: "size-20",
	lg: "size-28",
} as const;

const textSizeClasses = {
	sm: "text-lg",
	md: "text-2xl",
	lg: "text-4xl",
} as const;

function getInitials(user: User | null): string {
	if (!user) return "?";

	const first = user.first_name?.charAt(0)?.toUpperCase() ?? "";
	const last = user.last_name?.charAt(0)?.toUpperCase() ?? "";

	if (first && last) return `${first}${last}`;
	if (first) return first;
	if (user.username) return user.username.charAt(0).toUpperCase();
	return "?";
}

export const ProfileAvatar = ({ user, size = "lg" }: ProfileAvatarProps) => {
	return (
		<Avatar className={sizeClasses[size]}>
			<AvatarImage src={undefined} alt={user?.username ?? "User avatar"} />
			<AvatarFallback
				className={`${textSizeClasses[size]} bg-primary/10 text-primary font-semibold`}
			>
				{getInitials(user)}
			</AvatarFallback>
		</Avatar>
	);
};
