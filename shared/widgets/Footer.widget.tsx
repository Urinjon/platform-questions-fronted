"use client";

import { useEffect, useState } from "react";
import { BackgroundRippleEffect } from "@ui-kit/effects";
import { Container } from "./Container.widget";

export const Footer: React.FC = () => {
	const [windowSize, setWindowSize] = useState<number | null>(null);

	useEffect(() => {
		setWindowSize(window.innerWidth);
	}, []);

	if (windowSize === null) return null;

	return (
		<footer className="text-white py-4 relative min-h-50 mt-5 z-2">
			<BackgroundRippleEffect cols={windowSize > 768 ? 40 : 20} rows={4} />
			<Container className="text-center">
				<p>&copy; {new Date().getFullYear()} Your Company Name</p>
			</Container>
		</footer>
	);
};
