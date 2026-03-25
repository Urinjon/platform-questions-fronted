"use client";

import { QuestionsPagination } from "@features/question-display/pagination";

type Props = {
	page: number;
	totalPages: number;
	onPageChange: (page: number) => void;
};

export function QuestionsViewPagination({ page, totalPages, onPageChange }: Props) {
	if (totalPages <= 1) return null;

	return (
		<div className="mt-5 flex justify-center">
			<QuestionsPagination
				page={page}
				totalPages={totalPages}
				onPageChange={onPageChange}
			/>
		</div>
	);
}

