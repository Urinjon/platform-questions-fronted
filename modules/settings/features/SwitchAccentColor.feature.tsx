"use client";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@ui-kit/ui/select";
import { Space } from "@ui-kit/ui/space";
import { EclipseIcon, PaintbrushVerticalIcon } from "lucide-react";
import { useState } from "react";

type AccentColor =
	| "color-classic"
	| "color-green"
	| "color-blue"
	| "color-orange"
	| "color-rose"
	| "color-violet"
	| "color-yellow";

export const SwitchAccentColor = () => {
	const [accentColor, setAccentColor] = useState<AccentColor>("color-classic");

	const handleAccentColorChange = (value: AccentColor) => {
		setAccentColor(value);
	};

	return (
		<Space align="center" gap={3}>
			<Space>
				<PaintbrushVerticalIcon /> Акцент цвета:
			</Space>
			<Select value={accentColor} onValueChange={handleAccentColorChange}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Выберите цвет" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>
							<Space align="center" gap={3}>
								<PaintbrushVerticalIcon size={16} /> Акценты:
							</Space>
						</SelectLabel>
						<SelectItem value="color-classic">
							<EclipseIcon color="black" />
							Классический
						</SelectItem>
						<SelectItem value="color-green">
							<EclipseIcon color="green" />
							Зелёный
						</SelectItem>
						<SelectItem value="color-blue">
							<EclipseIcon color="blue" />
							Синий
						</SelectItem>
						<SelectItem value="color-orange">
							<EclipseIcon color="orange" />
							Оранжевый
						</SelectItem>
						<SelectItem value="color-rose">
							<EclipseIcon color="rose" />
							Розовый
						</SelectItem>
						<SelectItem value="color-violet">
							<EclipseIcon color="violet" />
							Фиолетовый
						</SelectItem>
						<SelectItem value="color-yellow">
							<EclipseIcon color="yellow" />
							Желтый
						</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</Space>
	);
};
