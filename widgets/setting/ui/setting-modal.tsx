"use client";

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@ui-kit/ui/dialog";

import { Separator } from "@ui-kit/ui/separator";
import {
	SwitchAccentColor,
	SwitchAnimation,
	SwitchLanguage,
	SwitchTheme,
} from "@features/setting";
import { HeaderAuth } from "@features/auth/actions";

import * as m from "@/paraglide/messages.js";

interface SettingModalProps {
	children?: React.ReactNode;
}

export const SettingModal: React.FC<SettingModalProps> = ({ children }) => {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>

			<DialogContent className="sm:max-w-[460px] max-h-[90vh] overflow-y-auto">
				<DialogHeader className="relative pb-4">
					<DialogTitle className="text-xl font-semibold tracking-tight">
						{m.settingtitle()}
					</DialogTitle>

					<p className="text-sm text-muted-foreground mt-1">
						{m.settingdescription()}
					</p>
				</DialogHeader>

				<div className="space-y-6 py-2">
					<div className="space-y-4">
						<h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
							{m.settingAccount()}
						</h3>
						<HeaderAuth />
					</div>

					<Separator />

					<div className="space-y-4">
						<h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
							{m.settingAppearance()}
						</h3>
						<div className="grid gap-4">
							<SwitchTheme />
							<SwitchAccentColor />
							<SwitchAnimation />
						</div>
					</div>

					<Separator />

					<div className="space-y-4">
						<h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
							{m.language()}
						</h3>
						<SwitchLanguage />
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};
