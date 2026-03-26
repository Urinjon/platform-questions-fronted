"use client";

import { Label } from "@ui-kit/ui/label";
import { Switch } from "@ui-kit/ui/switch";
import { LaptopMinimalCheckIcon } from "lucide-react"; // или LaptopMinimalCheckIcon
import { useAnimationsSettings } from "../providers/animations.provider";

import * as m from "@paraglide/messages";

export const SwitchAnimation = () => {
	const { animationsMode, setAnimationsMode } = useAnimationsSettings();
	const enabled = animationsMode === "on";

	return (
		<div className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent/50 transition-colors">
			<div className="flex items-center gap-3">
				<LaptopMinimalCheckIcon className="h-5 w-5 text-muted-foreground" />
				<div>
					<Label
						htmlFor="animation"
						className="text-sm font-medium leading-none"
					>
						{m.animationMode()}
					</Label>
					<p className="text-xs text-muted-foreground mt-0.5">
						{m.animationModeDescription()}
					</p>
				</div>
			</div>

			<Switch
				id="animation"
				checked={enabled}
				onCheckedChange={(checked: boolean) =>
					setAnimationsMode(checked ? "on" : "off")
				}
			/>
		</div>
	);
};
