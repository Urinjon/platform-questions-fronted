"use client";

import { cn } from "@shared/lib/utils";

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
	level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	size?:
		| "xs"
		| "sm"
		| "md"
		| "lg"
		| "xl"
		| "2xl"
		| "3xl"
		| "4xl"
		| "5xl"
		| "6xl";
}

export const Title: React.FC<TitleProps> = ({
	level = "h2",
	size = "md",
	className,
	...props
}) => {
	const baseClass = "font-bold";
	const Component = level;

	const sizes = {
		xs: "text-xs",
		sm: "text-sm",
		md: "text-md",
		lg: "text-lg",
		xl: "text-xl",
		"2xl": "text-2xl",
		"3xl": "text-3xl",
		"4xl": "text-4xl",
		"5xl": "text-5xl",
		"6xl": "text-6xl",
	} as const;

	const finalClassName = cn(sizes[size], baseClass, className);

	return (
		<Component {...props} className={finalClassName}>
			{props.children}
		</Component>
	);
};
