"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@ui-kit/ui/card";
import { Separator } from "@ui-kit/ui/separator";
import { UserCogIcon, InfoIcon } from "lucide-react";

import * as m from "paraglide/messages";

import { useProfileQuery } from "../api/use-profile.adapter";
import { getFirstData } from "@shared/api/response.utils";

import { ProfileHeader } from "./ProfileHeader";
import { ProfileIsActive } from "./ProfileIsActive";
import { ProfileInfoCard } from "./ProfileInfoCard";
import { ProfileForm } from "./ProfileForm";
import { ProfileSkeleton } from "./ProfileSkeleton";

export const ProfileView = () => {
	const { data, isLoading } = useProfileQuery();

	if (isLoading) {
		return <ProfileSkeleton />;
	}

	const user = data ? getFirstData(data) : null;

	return (
		<div className="mx-auto w-full max-w-3xl space-y-6 p-4 sm:p-6">
			{user && <ProfileIsActive user={user} />}

			<Card>
				<CardHeader>
					<ProfileHeader user={user} />
				</CardHeader>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<InfoIcon className="size-5" />
						{m.profileInfoTitle()}
					</CardTitle>
					<CardDescription>{m.profileInfoDescription()}</CardDescription>
				</CardHeader>
				<CardContent>
					<Separator className="mb-2" />
					<ProfileInfoCard user={user} />
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<UserCogIcon className="size-5" />
						{m.profileEditTitle()}
					</CardTitle>
					<CardDescription>{m.profileEditDescription()}</CardDescription>
				</CardHeader>
				<CardContent>
					<Separator className="mb-6" />
					<ProfileForm user={user} />
				</CardContent>
			</Card>
		</div>
	);
};
