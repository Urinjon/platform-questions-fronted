"use client";

import { QuestionsPagination } from "@features/question-display/pagination";

type Props = {
	page: number;
	totalPages: number;
	onPageChange: (page: number) => void;
};

export function QuestionsViewPagination({
	page,
	totalPages,
	onPageChange,
}: Props) {
	return (
		<div className="mt-5 flex flex-col items-center gap-2">
			<div className="text-xs text-muted-foreground">
				Страница {page} из {totalPages}
			</div>

			{totalPages > 1 && (
				<QuestionsPagination
					page={page}
					totalPages={totalPages}
					onPageChange={onPageChange}
				/>
			)}
		</div>
	);
}
