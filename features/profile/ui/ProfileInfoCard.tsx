"use client";

import type { User } from "@entities/user";
import { Mail, UserIcon, Hash } from "lucide-react";

interface ProfileInfoCardProps {
	user: User | null;
}

interface InfoRowProps {
	icon: React.ReactNode;
	label: string;
	value: string | number | undefined;
}

const InfoRow = ({ icon, label, value }: InfoRowProps) => (
	<div className="flex items-center gap-3 py-3">
		<div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted">
			{icon}
		</div>
		<div className="flex flex-col">
			<span className="text-xs text-muted-foreground">{label}</span>
			<span className="text-sm font-medium">{value ?? "—"}</span>
		</div>
	</div>
);

export const ProfileInfoCard = ({ user }: ProfileInfoCardProps) => {
	return (
		<div className="divide-y divide-border">
			<InfoRow
				icon={<Hash className="size-4 text-muted-foreground" />}
				label="ID"
				value={user?.id}
			/>
			<InfoRow
				icon={<UserIcon className="size-4 text-muted-foreground" />}
				label="Username"
				value={user?.username}
			/>
			<InfoRow
				icon={<Mail className="size-4 text-muted-foreground" />}
				label="Email"
				value={user?.email}
			/>
		</div>
	);
};
