"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@ui-kit/ui/card";
import { Separator } from "@ui-kit/ui/separator";
import { UserCog, Info } from "lucide-react";

import { useProfileQuery } from "../api/use-profile.adapter";
import { getFirstData } from "@shared/api/response.utils";

import { ProfileHeader } from "./ProfileHeader";
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
			<Card>
				<CardHeader>
					<ProfileHeader user={user} />
				</CardHeader>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<Info className="size-5" />
						Информация об аккаунте
					</CardTitle>
					<CardDescription>Основные данные вашего аккаунта</CardDescription>
				</CardHeader>
				<CardContent>
					<Separator className="mb-2" />
					<ProfileInfoCard user={user} />
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<UserCog className="size-5" />
						Редактирование профиля
					</CardTitle>
					<CardDescription>
						Измените данные профиля и нажмите «Сохранить изменения»
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Separator className="mb-6" />
					<ProfileForm user={user} />
				</CardContent>
			</Card>
		</div>
	);
};
