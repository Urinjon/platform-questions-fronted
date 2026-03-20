"use client";

import { cn } from "@shared/lib/utils";
import { motion } from "motion/react";
import { BarChart3, BookOpen } from "lucide-react";

import { itemVariants } from "../model/variants";
import { popularCategories, totalQuestions } from "../model/data";
import { useMemo } from "react";
import { AnimatedCounter } from "../../../shared/ui-kit/effects/animated-counter";
import { AnimationGate } from "@features/setting";

export function HomeHeroBentoCards() {
	const categories = useMemo(
		() =>
			popularCategories.map((category) => ({
				id: category,
				name: category,
			})),
		[],
	);

	return (
		<motion.div
			variants={itemVariants}
			className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 auto-rows-fr lg:translate-y-6"
		>
			<motion.div
				variants={itemVariants}
				className={cn(
					"rounded-3xl p-6 md:p-7",
					"bg-gradient-to-br from-primary/8 to-primary/3 dark:from-primary/12 dark:to-primary/6",
					"border border-primary/20 backdrop-blur-md shadow-xl",
					"flex flex-col gap-6",
				)}
			>
				<div className="flex items-center gap-3">
					<BookOpen className="h-7 w-7 text-primary" />
					<h3 className="text-xl sm:text-2xl font-semibold">
						Популярные категории
					</h3>
				</div>
				<div className="grid grid-cols-2 gap-3 text-sm md:text-base">
					{categories.map((category) => (
						<div
							key={category.id}
							className={cn(
								"px-4 py-3.5 rounded-xl text-center font-medium",
								"bg-background/60 border border-border/30",
								"hover:bg-primary/10 hover:border-primary/40 hover:text-primary",
								"transition-all duration-200 cursor-pointer",
							)}
						>
							{category.name}
						</div>
					))}
				</div>
			</motion.div>

			<motion.div
				variants={itemVariants}
				className={cn(
					"rounded-3xl p-6 md:p-8",
					"bg-card border border-border/50 backdrop-blur-md shadow-xl",
					"flex flex-col items-center justify-center text-center gap-4 md:gap-5",
				)}
			>
				<BarChart3 className="h-12 w-12 text-primary" />
				<div>
					<div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary">
						<AnimationGate fallback={<span>{totalQuestions}+</span>}>
							<AnimatedCounter to={totalQuestions} duration={8000} />+
						</AnimationGate>
					</div>
					<p className="text-lg text-muted-foreground mt-2">
						заданий доступно прямо сейчас
					</p>
				</div>
			</motion.div>
		</motion.div>
	);
}
