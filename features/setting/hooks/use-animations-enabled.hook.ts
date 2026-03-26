"use client";

import { useAnimationsSettings } from "../providers/animations.provider";

export function useAnimationsEnabled(): boolean {
	return useAnimationsSettings().animationsEnabled;
}
