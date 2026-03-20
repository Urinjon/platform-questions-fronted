"use client";

import type React from "react";
import { useAnimationsEnabled } from "../hooks/use-animations-enabled.hook";

export interface AnimationGateProps {
	/**
	 * Что отрисовывать, когда анимации включены
	 * (например: сложный animated-модуль с `motion/*`).
	 */
	children: React.ReactNode;
	/**
	 * Что отрисовывать, когда анимации выключены.
	 * Если не задано — компонент полностью убирается из render (возвращается `null`).
	 */
	fallback?: React.ReactNode;
}

export function AnimationGate({
	children,
	fallback = null,
}: AnimationGateProps) {
	const animationsEnabled = useAnimationsEnabled();

	if (!animationsEnabled) return fallback;
	return children;
}
