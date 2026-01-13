"use client";

import Image from "next/image";
import { cn } from "@shared/lib/utils";
import type { PropsWithChildren } from "react";

interface IImageBackgroundProps extends PropsWithChildren {
	src: string;
	alt: string;
	width: number;
	height: number;
	isBlur?: boolean;
}

export const ImageBackground: React.FC<IImageBackgroundProps> = ({
	src,
	alt,
	width,
	height,
	children,
	isBlur = false,
}: IImageBackgroundProps) => {
	return (
		<div className={cn("relative h-full w-full")}>
			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				className={cn(
					"absolute inset-0 h-full w-full object-cover",
					isBlur ? "blur-sm" : "",
				)}
			/>
			{children}
		</div>
	);
};
