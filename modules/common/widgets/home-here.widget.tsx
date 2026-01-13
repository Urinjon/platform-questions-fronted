"use client";

import { generateUniqId } from "@shared/lib/generate-uniq-id.lib";
import { cn } from "@shared/lib/utils";
import { Button } from "@shared/ui/button";
import { Spotlight } from "@shared/ui/spotlight";
import { TextGenerateEffect } from "@shared/ui/text-generate-effect";
import { MoveRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const words = `Создавай, проходи, соревнуйся.
Платформа с тысячами интересных вопросов
по самым разным темам — от науки до мемов.`;

export const HomeHere = () => {
	return (
		<header className="relative min-h-screen w-full overflow-hidden bg-background antialiased">
			{/* Фон + градиенты, которые адаптируются к теме */}
			<div className="pointer-events-none absolute inset-0 z-0">
				<div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/40" />

				{/* Светлая тема — мягкие пастельные акценты */}
				<div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl dark:bg-primary/5" />
				{/* Тёмная тема — более насыщенные акценты */}
				<div className="absolute -right-40 bottom-20 h-[600px] w-[600px] rounded-full bg-primary/15 blur-3xl dark:bg-primary/25 opacity-70 dark:opacity-50" />
			</div>

			{/* Spotlight оставляем только для тёмной темы */}
			<div className="dark:block hidden">
				<Spotlight
					className="-top-40 left-0 md:-top-32 md:left-[30%] md:-translate-x-1/2"
					fill="white"
				/>
			</div>

			<div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-10 px-5 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 xl:gap-20">
				{/* Левая часть — контент */}
				<div className="flex flex-col justify-center">
					<div className="relative mb-8 lg:mb-10">
						<h1
							className={cn(
								"bg-gradient-to-b from-foreground via-foreground/90 to-foreground/70 bg-clip-text",
								"text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl",
								"text-transparent",
							)}
						>
							Платформа c
							<br />
							<span className="bg-gradient-to-r from-primary via-primary/90 to-[hsl(var(--primary)/0.85)] bg-clip-text text-transparent">
								вопросами
							</span>
						</h1>
					</div>

					<TextGenerateEffect
						words={words}
						className={cn(
							"mt-5 max-w-2xl text-lg font-light leading-relaxed",
							"text-muted-foreground sm:text-xl",
						)}
						duration={0.75}
					/>

					<div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
						<Button
							size="lg"
							className={cn(
								"group h-13 sm:h-14 rounded-full px-8 sm:px-10 text-base sm:text-lg",
								"bg-primary text-primary-foreground hover:bg-primary/90",
								"shadow-lg shadow-primary/20 hover:shadow-primary/30",
								"transition-all duration-300",
							)}
						>
							Начать сейчас
							<MoveRight className="ml-2.5 h-5 w-5 transition-transform group-hover:translate-x-2" />
						</Button>

						<Button
							size="lg"
							variant="outline"
							className={cn(
								"h-13 sm:h-14 rounded-full border-border px-8 sm:px-10 text-base sm:text-lg",
								"bg-background/60 backdrop-blur-sm",
								"hover:bg-accent hover:text-accent-foreground",
								"transition-all duration-300",
							)}
						>
							Посмотреть примеры
						</Button>
					</div>

					<div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
						<div className="flex items-center gap-1.5">
							<Sparkles className="h-4 w-4 text-primary" /> 10 000+ вопросов
						</div>
						<div>15+ категорий</div>
						<div>Рейтинг & достижения</div>
						<div>Мультиплеер</div>
					</div>
				</div>

				{/* Правая часть — демонстрационный фрейм */}
				<div className="relative hidden lg:block">
					<motion.div
						initial={{ opacity: 0, x: 50, scale: 0.96 }}
						animate={{ opacity: 1, x: 0, scale: 1 }}
						transition={{ duration: 1, delay: 0.5 }}
						className={cn(
							"relative mx-auto aspect-[4/5] w-full max-w-[500px] rounded-2xl",
							"border border-border bg-card/70 backdrop-blur-xl shadow-2xl",
							"dark:bg-card/50 dark:backdrop-blur-2xl",
						)}
					>
						{/* Глянцевый блик */}
						<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent dark:from-white/8" />

						<div className="absolute inset-5 flex flex-col gap-4">
							{/* Заголовок вопроса */}
							<motion.div
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.9, duration: 0.7 }}
								className="h-16 rounded-xl bg-muted/70 p-4 backdrop-blur-sm"
							>
								<div className="h-4 w-3/4 rounded bg-muted-foreground/40" />
								<div className="mt-2.5 h-3 w-5/6 rounded bg-muted-foreground/30" />
							</motion.div>

							{/* Варианты */}
							{Array(4)
								.fill(0)
								.map((_, i) => (
									<motion.div
										key={generateUniqId(i.toString())}
										initial={{ opacity: 0, x: -15 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 1.1 + i * 0.15, duration: 0.6 }}
										className={cn(
											"h-14 rounded-xl p-4 transition-colors",
											i === 2
												? "border-2 border-primary/50 bg-primary/10 dark:bg-primary/15"
												: "bg-muted/60 hover:bg-muted/80",
										)}
									>
										<div className="flex items-center gap-3">
											<div className="h-7 w-7 rounded-lg bg-muted-foreground/20" />
											<div className="h-3.5 w-4/5 rounded bg-muted-foreground/40" />
										</div>
									</motion.div>
								))}
						</div>

						{/* Плавающие акценты */}
						<motion.div
							className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/20 blur-2xl dark:bg-primary/30"
							animate={{ y: [0, -12, 0], scale: [1, 1.08, 1] }}
							transition={{
								duration: 8,
								repeat: Infinity,
								repeatType: "reverse",
							}}
						/>
						<motion.div
							className="absolute -left-10 bottom-16 h-32 w-32 rounded-full bg-primary/10 blur-3xl dark:bg-primary/20"
							animate={{ y: [0, 18, 0], x: [0, 12, 0] }}
							transition={{
								duration: 11,
								repeat: Infinity,
								repeatType: "reverse",
								delay: 3,
							}}
						/>
					</motion.div>
				</div>
			</div>
		</header>
	);
};
