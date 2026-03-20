"use client";

import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { LocalStorageService } from "@shared/services/local-storage.service";

import {
	defaultAnimationsMode,
	animationsModeStorageKey,
	type AnimationsMode,
	isAnimationsMode,
} from "../settings.config";

type AnimationsContextValue = {
	animationsMode: AnimationsMode;
	setAnimationsMode: (mode: AnimationsMode) => void;
	animationsEnabled: boolean;
};

const AnimationsContext = createContext<AnimationsContextValue | null>(null);

export function AnimationProvider({ children }: { children: ReactNode }) {
	const storage = useMemo(() => new LocalStorageService(), []);

	const [animationsMode, setAnimationsMode] = useState<AnimationsMode>(
		defaultAnimationsMode,
	);

	useEffect(() => {
		const stored = storage.getItem<AnimationsMode>(animationsModeStorageKey);
		if (stored && isAnimationsMode(stored)) {
			setAnimationsMode(stored);
		}
	}, [storage]);

	useEffect(() => {
		storage.setItem(animationsModeStorageKey, animationsMode);
	}, [animationsMode, storage]);

	const value: AnimationsContextValue = useMemo(
		() => ({
			animationsMode,
			setAnimationsMode,
			animationsEnabled: animationsMode === "on",
		}),
		[animationsMode],
	);

	return (
		<AnimationsContext.Provider value={value}>
			{children}
		</AnimationsContext.Provider>
	);
}

export function useAnimationsSettings() {
	const ctx = useContext(AnimationsContext);
	if (!ctx)
		throw new Error(
			"useAnimationsSettings must be used inside AnimationProvider",
		);
	return ctx;
}
