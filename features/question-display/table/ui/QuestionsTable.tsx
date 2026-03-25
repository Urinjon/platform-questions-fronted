"use client";

import {
	Table,
	TableBody,
} from "@ui-kit/ui/table";
import type { Question } from "@entities/question";
import { QuestionsTableEmptyState } from "./QuestionsTableEmptyState";
import { QuestionsTableHeader } from "./QuestionsTableHeader";
import { QuestionsTableRow } from "./QuestionsTableRow";

type Props = {
	questions: Question[];
	onRowClick?: (id: number) => void;
};

export function QuestionsTable({ questions, onRowClick }: Props) {
	return (
		<div className="rounded-xl border bg-card/40 overflow-hidden">
			<Table>
				<QuestionsTableHeader />

				<TableBody>
					{questions.map((q, index) => (
						<QuestionsTableRow
							key={q.id}
							question={q}
							index={index}
							onRowClick={onRowClick}
						/>
					))}
				</TableBody>
			</Table>

			<QuestionsTableEmptyState isVisible={questions.length === 0} />
		</div>
	);
}
