"use client";

import { BookOpenIcon } from "lucide-react";
import {
	categoryVariants,
	containerVariants,
	itemVariants,
} from "../model/variants";
import { cn } from "@shared/lib/utils";
import { motion } from "motion/react";
import { useMemo } from "react";
import { popularCategories } from "../model/data";
import { AnimationGate } from "@features/setting";
import { m } from "@paraglide/messages";

export const HomeHeroCategory: React.FC = () => {
	const categories = useMemo(
		() =>
			popularCategories.map((category: string) => ({
				id: category,
				name: category,
			})),
		[],
	);

	return (
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
				<BookOpenIcon className="h-7 w-7 text-primary" />
				<h3 className="text-xl sm:text-2xl font-semibold">
					{m.heroCategory()}
				</h3>
			</div>

			<AnimationGate
				fallback={
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
				}
			>
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="grid grid-cols-2 gap-3 text-sm md:text-base"
				>
					{categories.map((category) => (
						<motion.div
							key={category.id}
							variants={categoryVariants}
							className={cn(
								"px-4 py-3.5 rounded-xl text-center font-medium",
								"bg-background/60 border border-border/30",
								"hover:bg-primary/10 hover:border-primary/40 hover:text-primary",
								"transition-all duration-200 cursor-pointer",
							)}
						>
							{category.name}
						</motion.div>
					))}
				</motion.div>
			</AnimationGate>
		</motion.div>
	);
};
