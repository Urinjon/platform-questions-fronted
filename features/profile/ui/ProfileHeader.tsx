"use client";

import type { User } from "@entities/user";
import { Badge } from "@ui-kit/ui/badge";
import { Shield, CheckCircle } from "lucide-react";

import { ProfileAvatar } from "./ProfileAvatar";

interface ProfileHeaderProps {
	user: User | null;
}

const roleLabels: Record<string, string> = {
	USER: "Пользователь",
	ADMIN: "Администратор",
	MODERATOR: "Модератор",
};

export const ProfileHeader = ({ user }: ProfileHeaderProps) => {
	const fullName = [user?.first_name, user?.last_name]
		.filter(Boolean)
		.join(" ");

	const displayName = fullName || user?.username || "—";
	const roleLabel = user?.role ? (roleLabels[user.role] ?? user.role) : null;

	return (
		<div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6">
			<ProfileAvatar user={user} size="lg" />

			<div className="flex flex-col items-center gap-2 sm:items-start">
				<h2 className="text-2xl font-bold tracking-tight">{displayName}</h2>

				{user?.username && fullName && (
					<p className="text-muted-foreground text-sm">@{user.username}</p>
				)}

				<div className="flex flex-wrap items-center gap-2">
					{roleLabel && (
						<Badge variant="secondary" className="gap-1">
							<Shield className="size-3" />
							{roleLabel}
						</Badge>
					)}

					{user?.is_active && (
						<Badge variant="success" className="gap-1">
							<CheckCircle className="size-3" />
							Активен
						</Badge>
					)}
				</div>
			</div>
		</div>
	);
};
