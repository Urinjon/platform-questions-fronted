import type React from "react";
import { Brain, HelpCircle, Lightbulb, Trophy, CodeIcon } from "lucide-react";
import type { Variants } from "motion/react";

export type YRange = [number, number];

export const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.12, delayChildren: 0.2 },
	},
} as const;

export const itemVariants = {
	hidden: { y: 22, opacity: 0, scale: 0.98 },
	visible: {
		y: 0,
		opacity: 1,
		scale: 1,
		transition: { type: "spring" as const, damping: 14, stiffness: 110 },
	},
} as const;

export const floatVariants = (
	delay = 0,
	duration = 7,
	yRange: YRange = [-20, 20],
) => ({
	float: {
		y: yRange,
		rotate: [-2, 2, -2],
		transition: {
			y: {
				duration,
				repeat: Infinity,
				repeatType: "reverse" as const,
				delay,
			},
			rotate: {
				duration: duration * 1.3,
				repeat: Infinity,
				repeatType: "reverse" as const,
				delay,
			},
		},
	},
});

export const floatingItems: Array<{
	id: string;
	icon: React.ElementType;
	text?: string;
	delay: number;
	y?: YRange;
	color?: boolean;
	small?: boolean;
}> = [
	{
		id: "help",
		icon: HelpCircle,
		text: "?",
		delay: 0,
		y: [-25, 25],
		color: false,
	},
	{ id: "bulb", icon: Lightbulb, delay: 1.2, y: [-18, 18], color: true },
	{
		id: "code",
		icon: CodeIcon,
		text: "</>",
		delay: 2.4,
		y: [-30, 30],
		color: false,
	},
	{ id: "trophy", icon: Trophy, delay: 0.8, y: [-22, 22], color: true },
	{
		id: "brain",
		icon: Brain,
		text: "??",
		delay: 3.1,
		y: [-15, 15],
		color: false,
		small: true,
	},
];

export const categoryVariants: Variants = {
	hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: { duration: 0.35, ease: "easeOut" },
	},
} as const;
