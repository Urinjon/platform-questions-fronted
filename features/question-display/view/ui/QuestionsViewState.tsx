"use client";

import { Button } from "@ui-kit/ui/button";
import { Skeleton } from "@ui-kit/ui/skeleton";
import { AnimatePresence, motion } from "motion/react";

type Props = {
	isLoading: boolean;
	isFetching: boolean;
	isError: boolean;
	isEmpty: boolean;
	onResetFilters: () => void;
	children: React.ReactNode;
};

export function QuestionsViewState({
	isLoading,
	isFetching,
	isError,
	isEmpty,
	onResetFilters,
	children,
}: Props) {
	if (isLoading) {
		return (
			<AnimatePresence mode="wait">
				<motion.div
					key="skeleton"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.18 }}
					className="space-y-4"
				>
					{Array.from({ length: 5 }).map((_, i) => (
						<Skeleton
							key={`skeleton-${i}`}
							className="h-20 w-full rounded-xl"
						/>
					))}
				</motion.div>
			</AnimatePresence>
		);
	}

	if (isError) {
		return (
			<div className="mt-16 text-center text-muted-foreground">
				Не удалось загрузить вопросы
				<br />
				<Button
					variant="link"
					onClick={() => window.location.reload()}
					className="mt-2"
				>
					Попробовать снова
				</Button>
			</div>
		);
	}

	return (
		<div className="relative">
			{children}

			<AnimatePresence>
				{isFetching && (
					<motion.div
						key="fetching-overlay"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.18 }}
						className="pointer-events-none absolute inset-0 rounded-xl bg-background/40 backdrop-blur-[1px]"
					/>
				)}
			</AnimatePresence>

			{isEmpty && (
				<div className="mt-16 text-center text-muted-foreground">
					Ничего не найдено по выбранным фильтрам
					<br />
					<Button variant="link" onClick={onResetFilters} className="mt-2">
						Сбросить фильтры
					</Button>
				</div>
			)}
		</div>
	);
}
