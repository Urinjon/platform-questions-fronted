"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { AccentColor } from "../settings.config";

const AccentContext = createContext<{
	accent: AccentColor;
	setAccent: (a: AccentColor) => void;
} | null>(null);

export function AccentProvider({ children }: { children: React.ReactNode }) {
	const [accent, setAccent] = useState<AccentColor>("neutral");

	useEffect(() => {
		const stored = localStorage.getItem("accent") as AccentColor | null;
		if (stored) setAccent(stored);
	}, []);

	useEffect(() => {
		document.documentElement.dataset.accent =
			accent === "neutral" ? "" : accent;

		localStorage.setItem("accent", accent);
	}, [accent]);

	return (
		<AccentContext.Provider value={{ accent, setAccent }}>
			{children}
		</AccentContext.Provider>
	);
}

export const useAccent = () => {
	const ctx = useContext(AccentContext);
	if (!ctx) throw new Error("useAccent must be used inside AccentProvider");
	return ctx;
};
