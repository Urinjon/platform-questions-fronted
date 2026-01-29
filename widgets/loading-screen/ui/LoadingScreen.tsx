"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export function LoadingScreen() {
	return (
		<div className="relative min-h-screen w-full overflow-hidden bg-background flex flex-col items-center justify-center px-6">
			{/* Фоновая сетка */}
			<div className="pointer-events-none absolute inset-0 bg-grid-neutral-900/10 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]" />

			{/* Мягкое свечение */}
			<div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-accent/5 to-secondary/10 opacity-70" />

			<div className="relative z-10 flex flex-col items-center gap-10 text-center">
				{/* Анимированный логотип */}
				<motion.div
					initial={{ opacity: 0, scale: 0.7 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="relative"
				>
					<div className="relative flex h-32 w-32 items-center justify-center">
						{/* Внешнее вращающееся кольцо */}
						<motion.div
							className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-primary via-accent to-primary bg-clip-border"
							animate={{ rotate: 360 }}
							transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
						/>

						{/* Внутреннее кольцо (медленнее) */}
						<motion.div
							className="absolute inset-4 rounded-full border-4 border-transparent bg-gradient-to-r from-accent/70 via-primary/70 to-accent/70 bg-clip-border opacity-60"
							animate={{ rotate: -360 }}
							transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
						/>

						{/* Логотип в центре */}
						<div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-secondary/90 backdrop-blur-md border border-border/50 shadow-2xl overflow-hidden">
							<Image
								src="/logo.png"
								alt="Platform Questions Logo"
								width={64}
								height={64}
								className="object-contain"
								priority
							/>
						</div>

						{/* Декоративные искры вокруг логотипа */}
						<motion.div
							className="absolute inset-0 pointer-events-none"
							animate={{ rotate: 360 }}
							transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
						>
							<Sparkles className="absolute left-1/2 top-1 h-6 w-6 -translate-x-1/2 text-accent opacity-80" />
						</motion.div>
					</div>
				</motion.div>

				{/* Текст */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.3 }}
					className="space-y-4"
				>
					<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
						Загружаем вопросы...
					</h2>

					<p className="text-lg text-muted-foreground max-w-md">
						Готовим платформу с самыми интересными вопросами специально для тебя
					</p>
				</motion.div>

				{/* Прогресс-бар */}
				<motion.div
					initial={{ opacity: 0, scaleX: 0 }}
					animate={{ opacity: 1, scaleX: 1 }}
					transition={{ duration: 1.3, delay: 0.6, ease: "easeOut" }}
					className="w-72 h-1.5 bg-secondary rounded-full overflow-hidden border border-border/30"
				>
					<motion.div
						className="h-full bg-gradient-to-r from-primary via-accent to-primary"
						initial={{ x: "-100%" }}
						animate={{ x: "100%" }}
						transition={{
							duration: 3,
							repeat: Infinity,
							repeatType: "reverse",
							ease: "easeInOut",
						}}
					/>
				</motion.div>

				{/* Статус */}
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.5, delay: 1 }}
					className="text-sm text-muted-foreground mt-8"
				>
					Это может занять пару секунд • Уже почти готово ✨
				</motion.p>
			</div>
		</div>
	);
}
