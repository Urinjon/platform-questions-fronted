"use client";

import { Button } from "@ui-kit/ui/button";
import { Skeleton } from "@ui-kit/ui/skeleton";

type Props = {
	isLoading: boolean;
	isError: boolean;
	isEmpty: boolean;
	onResetFilters: () => void;
	children: React.ReactNode;
};

export function QuestionsViewState({
	isLoading,
	isError,
	isEmpty,
	onResetFilters,
	children,
}: Props) {
	if (isLoading) {
		return (
			<div className="space-y-4">
				{Array.from({ length: 5 }).map((_, i) => (
					<Skeleton key={`skeleton-${i}`} className="h-20 w-full rounded-xl" />
				))}
			</div>
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
		<>
			{children}

			{isEmpty && (
				<div className="mt-16 text-center text-muted-foreground">
					Ничего не найдено по выбранным фильтрам
					<br />
					<Button variant="link" onClick={onResetFilters} className="mt-2">
						Сбросить фильтры
					</Button>
				</div>
			)}
		</>
	);
}

