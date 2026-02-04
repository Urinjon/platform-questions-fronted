// "use client";

// import { Label } from "@ui-kit/ui/label";
// import { Space } from "@ui-kit/ui/space";
// import { Switch } from "@ui-kit/ui/switch";
// import { LaptopMinimalCheckIcon } from "lucide-react";
// import { useState } from "react";

// export const SwitchAnimation = () => {
// 	const [isAnimated, setIsAnimated] = useState<boolean>(true);

// 	const toggleAnimation = () => {
// 		setIsAnimated(!isAnimated);
// 	};

// 	return (
// 		<Space align="center" gap={3}>
// 			<Label htmlFor="is-animated">
// 				<LaptopMinimalCheckIcon /> вкл/выкл анимации
// 			</Label>
// 			<Switch
// 				id="is-animated"
// 				checked={isAnimated}
// 				onChange={toggleAnimation}
// 			/>
// 		</Space>
// 	);
// };

"use client";

import { Label } from "@ui-kit/ui/label";
import { Switch } from "@ui-kit/ui/switch";
import { LaptopMinimalCheckIcon } from "lucide-react"; // или LaptopMinimalCheckIcon
import { useState } from "react";

export const SwitchAnimation = () => {
	const [enabled, setEnabled] = useState(true);

	return (
		<div className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent/50 transition-colors">
			<div className="flex items-center gap-3">
				<LaptopMinimalCheckIcon className="h-5 w-5 text-muted-foreground" />
				<div>
					<Label
						htmlFor="animation"
						className="text-sm font-medium leading-none"
					>
						Анимации интерфейса
					</Label>
					<p className="text-xs text-muted-foreground mt-0.5">
						Плавные переходы и эффекты
					</p>
				</div>
			</div>

			<Switch id="animation" checked={enabled} onCheckedChange={setEnabled} />
		</div>
	);
};
