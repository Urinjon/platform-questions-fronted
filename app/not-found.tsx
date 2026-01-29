"use client";

import { ArrowLeft, Home, Search } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@shared/lib/utils";
import { Button } from "@ui-kit/ui/button";

export default function NotFound() {
	return (
		<div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black flex flex-col items-center justify-center px-6 py-24">
			<div className="pointer-events-none absolute inset-0 bg-grid-slate-800/30 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

			<div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-fuchsia-500/5 to-cyan-500/10 opacity-60" />

			<div className="relative z-10 max-w-3xl text-center space-y-10">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="relative"
				>
					<h1
						className={cn(
							"text-[min(28vw,18rem)] font-black leading-none tracking-tighter",
							"bg-gradient-to-br from-white via-slate-200 to-slate-400 bg-clip-text text-transparent",
							"drop-shadow-2xl",
						)}
					>
						404
					</h1>

					<div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10 blur-3xl opacity-70 -z-10" />
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.2 }}
					className="space-y-6"
				>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
						Страница не найдена
					</h2>

					<p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
						Кажется, вы зашли туда, куда даже мы ещё не добрались.
						<br className="hidden sm:block" />
						Возможно, страница переместилась, была удалена или никогда не
						существовала.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.4 }}
					className="flex flex-col sm:flex-row gap-5 justify-center pt-8"
				>
					<Button asChild size="xxl">
						<Link href="/">
							<Home className="h-5 w-5" />
							Вернуться на главную
						</Link>
					</Button>

					<Button
						asChild
						variant="outline"
						size="lg"
						className={cn(
							"h-14 px-8 text-lg font-medium gap-2",
							"border-slate-700 text-slate-300 hover:bg-slate-800/60 hover:text-white",
							"backdrop-blur-sm transition-all duration-300",
						)}
					>
						<Link href="/search">
							<Search className="h-5 w-5" />
							Поиск по сайту
						</Link>
					</Button>
				</motion.div>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1.2, delay: 0.8 }}
					className="text-sm text-slate-500 mt-12"
				>
					P.S. Если вы уверены, что страница должна быть —{" "}
					<Link
						href="/support"
						className="text-violet-400 hover:text-violet-300 underline underline-offset-4"
					>
						напишите нам
					</Link>
				</motion.p>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 1 }}
				className="absolute bottom-12 left-1/2 -translate-x-1/2"
			>
				<Button
					variant="ghost"
					size="sm"
					asChild
					className="text-slate-400 hover:text-slate-200 gap-1.5"
				>
					<Link href="/">
						<ArrowLeft className="h-4 w-4" />
						На главную
					</Link>
				</Button>
			</motion.div>
		</div>
	);
}
