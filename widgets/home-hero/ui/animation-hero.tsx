"use client";

import { AnimationGate } from "@features/setting";
import { Spotlight } from "@ui-kit/effects/spotlight";

export const AnimationHero: React.FC = () => {
	return (
		<>
			<div className="pointer-events-none absolute inset-0 z-0">
				<div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/40" />

				{/* Светлая тема — мягкие пастельные акценты */}
				<div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl dark:bg-primary/5" />
				{/* Тёмная тема — более насыщенные акценты */}
				<div className="absolute -right-40 bottom-20 h-[600px] w-[600px] rounded-full bg-primary/15 blur-3xl dark:bg-primary/25 opacity-70 dark:opacity-50" />
			</div>

			{/* Spotlight оставляем только для тёмной темы */}
			<AnimationGate fallback={null}>
				<div className="dark:block hidden">
					<Spotlight
						className="-top-40 left-0 md:-top-32 md:left-[30%] md:-translate-x-1/2"
						fill="white"
					/>
				</div>
			</AnimationGate>
		</>
	);
};
