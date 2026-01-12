"use client";

import { cn } from "@shared/lib/utils";

interface IGridProps extends React.HTMLAttributes<HTMLDivElement> {
	col: number;
	row: number;
	spaceY?: number;
	spaceX?: number;
	as?: "section" | "div";
	isWrap?: boolean;
	fullWidth?: boolean;
}

export const Grid: React.FC<IGridProps> = ({
	as = "div",
	col = 1,
	row = 1,
	spaceY = 0,
	spaceX = 0,
	isWrap = false,
	fullWidth = false,
	...props
}) => {
	const baseClass = "grid";

	const Component = as;

	const finalClassName = cn(
		baseClass,
		"overflow-x-auto",
		`gap-y-${spaceY} gap-x-${spaceX}`,
		`grid-cols-${col} grid-rows-${row}`,
		isWrap && `grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${col}`,
		fullWidth && "w-full",
		props.className,
	);

	return (
		<Component {...props} className={finalClassName}>
			{props.children}
		</Component>
	);
};
