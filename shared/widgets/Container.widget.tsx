"use client";

import { cn } from "@shared/lib/utils";

export const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
	children,
	...props
}) => {
	const className = cn("container mx-auto", props.className);

	return (
		<div {...props} className={className}>
			{children}
		</div>
	);
};
