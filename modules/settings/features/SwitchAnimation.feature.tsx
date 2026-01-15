"use client";

import { Label } from "@ui-kit/ui/label";
import { Space } from "@ui-kit/ui/space";
import { Switch } from "@ui-kit/ui/switch";
import { LaptopMinimalCheckIcon } from "lucide-react";
import { useState } from "react";

export const SwitchAnimation = () => {
	const [isAnimated, setIsAnimated] = useState<boolean>(true);

	const toggleAnimation = () => {
		setIsAnimated(!isAnimated);
	};

	return (
		<Space align="center" gap={3}>
			<Label htmlFor="is-animated">
				<LaptopMinimalCheckIcon /> вкл/выкл анимации
			</Label>
			<Switch
				id="is-animated"
				checked={isAnimated}
				onChange={toggleAnimation}
			/>
		</Space>
	);
};
