"use client";

import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
} from "@ui-kit/ui/pagination";

export const QuestionsPagination: React.FC = () => {
	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationLink href="#" isActive>
						1
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">2</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">3</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">4</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">5</PaginationLink>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
};
