"use client";

import Image, { type ImageProps } from "next/image";

export const ImageApp: React.FC<ImageProps> = ({ ...props }) => {
	return (
		<Image
			className="object-cover"
			loading="lazy"
			{...props}
			alt={props.alt || "Image"}
		/>
	);
};
