"use client";

import { cn } from "@shared/lib/utils";
import { itemVariants } from "../model/variants";
import { motion } from "motion/react";
import { AnimationGate } from "@features/setting";
import { totalQuestions } from "../model/data";
import { AnimatedCounter } from "@ui-kit/effects/animated-counter";
import { BarChart3Icon } from "lucide-react";
import { m } from "@paraglide/messages";

export const HomeHeroCounterQuestions: React.FC = () => {
	return (
		<motion.div
			variants={itemVariants}
			className={cn(
				"rounded-3xl p-6 md:p-8",
				"bg-card border border-border/50 backdrop-blur-md shadow-xl",
				"flex flex-col items-center justify-center text-center gap-4 md:gap-5",
			)}
		>
			<BarChart3Icon className="h-12 w-12 text-primary" />
			<div>
				<div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary">
					<AnimationGate fallback={<span>{totalQuestions}+</span>}>
						<AnimatedCounter to={totalQuestions} duration={8000} />+
					</AnimationGate>
				</div>
				<p className="text-lg text-muted-foreground mt-2">{m.heroCount()}</p>
			</div>
		</motion.div>
	);
};
