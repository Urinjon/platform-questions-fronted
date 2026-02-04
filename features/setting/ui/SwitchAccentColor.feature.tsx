// "use client";

// import {
// 	Select,
// 	SelectContent,
// 	SelectGroup,
// 	SelectItem,
// 	SelectLabel,
// 	SelectTrigger,
// 	SelectValue,
// } from "@ui-kit/ui/select";
// import { Space } from "@ui-kit/ui/space";
// import { EclipseIcon, PaintbrushVerticalIcon } from "lucide-react";

// import { type AccentColor, accentsList } from "../settings.config";
// import { useAccent } from "../providers/accent.provider";

// export const SwitchAccentColor = () => {
// 	const { accent, setAccent } = useAccent();

// 	const handleAccentColorChange = (value: AccentColor) => {
// 		setAccent(value);
// 	};

// 	return (
// 		<Space align="center" gap={3}>
// 			<Space>
// 				<PaintbrushVerticalIcon /> Акцент цвета:
// 			</Space>
// 			<Select value={accent} onValueChange={handleAccentColorChange}>
// 				<SelectTrigger className="w-[180px]">
// 					<SelectValue placeholder="Выберите цвет" />
// 				</SelectTrigger>
// 				<SelectContent>
// 					<SelectGroup>
// 						<SelectLabel>
// 							<Space align="center" gap={3}>
// 								<PaintbrushVerticalIcon size={16} /> Акценты:
// 							</Space>
// 						</SelectLabel>
// 						{accentsList.map((color) => (
// 							<SelectItem key={color} value={color}>
// 								<EclipseIcon color={color} />
// 								{color}
// 							</SelectItem>
// 						))}
// 						{/*<SelectItem value="color-classic">
//               <EclipseIcon color="black" />
//               Классический
//             </SelectItem>
//             <SelectItem value="color-green">
//               <EclipseIcon color="green" />
//               Зелёный
//             </SelectItem>
//             <SelectItem value="color-blue">
//               <EclipseIcon color="blue" />
//               Синий
//             </SelectItem>
//             <SelectItem value="color-orange">
//               <EclipseIcon color="orange" />
//               Оранжевый
//             </SelectItem>
//             <SelectItem value="color-rose">
//               <EclipseIcon color="rose" />
//               Розовый
//             </SelectItem>
//             <SelectItem value="color-violet">
//               <EclipseIcon color="violet" />
//               Фиолетовый
//             </SelectItem>
//             <SelectItem value="color-yellow">
//               <EclipseIcon color="yellow" />
//               Желтый
//             </SelectItem>*/}
// 					</SelectGroup>
// 				</SelectContent>
// 			</Select>
// 		</Space>
// 	);
// };
//
"use client";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@ui-kit/ui/select";
import { Paintbrush } from "lucide-react";
import { useAccent } from "../providers/accent.provider";
import { accentsList } from "../settings.config";

export const SwitchAccentColor = () => {
	const { accent, setAccent } = useAccent();

	return (
		<div className="flex items-center justify-between gap-4 rounded-lg border p-3 hover:bg-accent/50 transition-colors">
			<div className="flex items-center gap-3">
				<Paintbrush className="h-5 w-5 text-muted-foreground" />
				<span className="text-sm font-medium">Акцентный цвет</span>
			</div>

			<Select value={accent} onValueChange={(v) => setAccent(v as any)}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Выберите цвет" />
				</SelectTrigger>
				<SelectContent>
					{accentsList.map((color) => (
						<SelectItem key={color} value={color}>
							<div className="flex items-center gap-2">
								<div
									className="size-4 rounded-full"
									style={{ backgroundColor: color }}
								/>
								<span className="capitalize">
									{color.replace("color-", "")}
								</span>
							</div>
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
};
