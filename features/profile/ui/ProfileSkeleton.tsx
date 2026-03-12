"use client";

import { Skeleton } from "@ui-kit/ui/skeleton";
import { Card, CardContent, CardHeader } from "@ui-kit/ui/card";
import { generateUniqId } from "@shared/lib/generate-uniq-id.lib";

export const ProfileSkeleton = () => {
	return (
		<div className="mx-auto w-full max-w-3xl space-y-6 p-4 sm:p-6">
			<Card>
				<CardHeader>
					<div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6">
						<Skeleton className="size-28 rounded-full" />
						<div className="flex flex-col items-center gap-3 sm:items-start">
							<Skeleton className="h-8 w-48" />
							<Skeleton className="h-4 w-32" />
							<div className="flex gap-2">
								<Skeleton className="h-6 w-28 rounded-full" />
								<Skeleton className="h-6 w-20 rounded-full" />
							</div>
						</div>
					</div>
				</CardHeader>
			</Card>

			<Card>
				<CardHeader>
					<Skeleton className="h-6 w-48" />
					<Skeleton className="h-4 w-72" />
				</CardHeader>
				<CardContent className="space-y-4">
					{Array.from({ length: 3 }).map((_, i) => (
						<div
							key={generateUniqId(`skeleton-info-${i}`)}
							className="flex items-center gap-3 py-3"
						>
							<Skeleton className="size-9 rounded-lg" />
							<div className="flex flex-col gap-1">
								<Skeleton className="h-3 w-16" />
								<Skeleton className="h-4 w-36" />
							</div>
						</div>
					))}
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<Skeleton className="h-6 w-52" />
					<Skeleton className="h-4 w-80" />
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="grid gap-6 sm:grid-cols-2">
						<div className="space-y-2">
							<Skeleton className="h-4 w-12" />
							<Skeleton className="h-9 w-full" />
						</div>
						<div className="space-y-2">
							<Skeleton className="h-4 w-16" />
							<Skeleton className="h-9 w-full" />
						</div>
					</div>
					<div className="space-y-2">
						<Skeleton className="h-4 w-20" />
						<Skeleton className="h-9 w-full" />
					</div>
					<div className="space-y-2">
						<Skeleton className="h-4 w-12" />
						<Skeleton className="h-9 w-full" />
					</div>
					<div className="flex justify-end">
						<Skeleton className="h-9 w-48" />
					</div>
				</CardContent>
			</Card>
		</div>
	);
};
