"use client";

import { TextGenerateEffect } from "@ui-kit/effects";
import { AnimationGate } from "@features/setting";
import { TypogrphySpan } from "@ui-kit/ui/paragraph";
import { Button } from "@ui-kit/ui/button";
import { cn } from "@shared/lib/utils";
import { motion } from "motion/react";
import { ArrowRight, InfoIcon } from "lucide-react";

import { HomeHeroFloatingItems } from "./home-hero-floating-items";
import { itemVariants } from "../model/variants";
import Link from "next/link";
import { m } from "@paraglide/messages";
import { useMounted } from "@shared/hooks/use-mounted";

const words = `Создавай, проходи, соревнуйся.
Платформа с тысячами интересных вопросов
по самым разным темам — от науки до мемов.`;

export function HomeHeroMainCard() {
	const mounted = useMounted();

	return (
		<motion.div variants={itemVariants} className="lg:col-span-12 relative">
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute -left-16 -top-20 w-[260px] h-[260px] rounded-full bg-primary/10 blur-3xl" />
				<div className="absolute -right-20 top-24 w-[280px] h-[280px] rounded-full bg-primary/7 blur-3xl" />
			</div>

			<div
				className={cn(
					"relative rounded-3xl md:rounded-[2rem]",
					"p-6 md:p-10 lg:p-12",
					"bg-card/75 backdrop-blur-xl border border-border/40 shadow-2xl",
					"h-full overflow-hidden",
					"min-h-[420px] lg:min-h-[460px]",
				)}
			>
				<AnimationGate>
					<HomeHeroFloatingItems />
				</AnimationGate>

				<div className="relative z-10 text-center">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
						<span className="text-foreground">Твоя личная </span>
						<span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
							база заданий
						</span>
					</h1>

					<div className="mt-4">
						<AnimationGate fallback={<TypogrphySpan>{words}</TypogrphySpan>}>
							<TextGenerateEffect
								words={words}
								className={cn(
									"text-muted-foreground sm:text-lg font-light leading-relaxed",
									"mx-auto max-w-3xl",
								)}
								duration={0.75}
							/>
						</AnimationGate>
					</div>

					<div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
						<Button
							asChild
							size="lg"
							className={cn(
								"h-12 md:h-13 px-9 md:px-12 text-base font-medium rounded-full",
								"bg-primary text-primary-foreground hover:bg-primary/92",
								"shadow-lg shadow-primary/30 hover:shadow-primary/50",
								"transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]",
							)}
						>
							<Link href="/questions">
								{mounted ? m.heroStart() : ""}
								<ArrowRight className="ml-3 h-5 w-5" />
							</Link>
						</Button>

						<Button
							asChild
							size="lg"
							variant="outline"
							className={cn(
								"h-12 md:h-13 px-8 md:px-11 text-base rounded-full border-primary/40",
								"hover:bg-primary/10 hover:text-primary hover:border-primary/60",
								"transition-all duration-300",
							)}
						>
							<Link href="/help">
								{mounted ? m.heroWhat() : ""}
								<InfoIcon className="ml-3 h-5 w-5" />
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
