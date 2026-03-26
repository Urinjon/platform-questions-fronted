export type AccentColor =
	| "neutral"
	| "blue"
	| "green"
	| "violet"
	| "orange"
	| "red"
	| "rose"
	| "yellow";

export const accentsList: AccentColor[] = [
	"neutral",
	"blue",
	"green",
	"violet",
	"orange",
	"red",
	"rose",
	"yellow",
];

export type AnimationsMode = "on" | "off";

export const animationsModeStorageKey = "animationsMode";

export const defaultAnimationsMode: AnimationsMode = "on";

export const isAnimationsMode = (value: AnimationsMode): boolean => {
	return value === "on" || value === "off";
};
