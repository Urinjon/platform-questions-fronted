"use client";

import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
} from "@ui-kit/ui/pagination";

interface QuestionsPaginationProps {
	page: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export const QuestionsPagination: React.FC<QuestionsPaginationProps> = ({
	page,
	totalPages,
	onPageChange,
}) => {
	if (totalPages <= 1) return null;

	const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

	return (
		<Pagination>
			<PaginationContent>
				{pages.map((p) => (
					<PaginationItem key={p}>
						<PaginationLink
							href="#"
							isActive={p === page}
							onClick={(event) => {
								event.preventDefault();
								if (p !== page) onPageChange(p);
							}}
						>
							{p}
						</PaginationLink>
					</PaginationItem>
				))}
			</PaginationContent>
		</Pagination>
	);
};
