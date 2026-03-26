"use client";

import type { User } from "@entities/user";
import { Alert, AlertDescription, AlertTitle } from "@ui-kit/ui/alert";
import { AlertTriangle } from "lucide-react";

import * as m from "paraglide/messages";

interface ProfileIsActiveProps {
	user: User | null;
}

export const ProfileIsActive = ({ user }: ProfileIsActiveProps) => {
	if (!user || user.is_active) {
		return null;
	}

	return (
		<Alert className="border-yellow-400/80 bg-yellow-50 text-yellow-900 dark:border-yellow-500/70 dark:bg-yellow-500/10 dark:text-yellow-200">
			<AlertTriangle className="text-yellow-500 dark:text-yellow-300" />
			<AlertTitle>{m.profileActivationTitle()}</AlertTitle>
			<AlertDescription>
				{m.profileActivationDescription({
					email: user.email ?? "",
				})}
				<div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
					<span className="opacity-90">{m.profileActivationReloadHint()}</span>
					<button
						type="button"
						className="underline underline-offset-4 hover:opacity-90"
						onClick={() => window.location.reload()}
					>
						{m.profileActivationReloadAction()}
					</button>
				</div>
			</AlertDescription>
		</Alert>
	);
};
