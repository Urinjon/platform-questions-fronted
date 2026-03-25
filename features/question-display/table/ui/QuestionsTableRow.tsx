"use client";

import { Badge } from "@ui-kit/ui/badge";
import { TableCell, TableRow } from "@ui-kit/ui/table";
import { cn } from "@shared/lib/utils";
import type { Question } from "@entities/question";
import { QuestionDetailModal } from "@features/question-display/detail";
import {
	CheckCircle2,
	HelpCircle,
	ListChecks,
	Text,
	XCircle,
	Tag,
} from "lucide-react";
import { motion } from "motion/react";
import { getDeadlineColorClass, getDeadlineLabel } from "../model/utils";

const MotionTableRow = motion(TableRow);

type Props = {
	question: Question;
	index: number;
	onRowClick?: (id: number) => void;
};

export function QuestionsTableRow({ question: q, index, onRowClick }: Props) {
	const totalAnswers =
		(q.answersCount?.success ?? 0) + (q.answersCount?.failed ?? 0);
	const successRate =
		totalAnswers > 0 ? (q.answersCount.success / totalAnswers) * 100 : 0;

	const startDeadlineDate = new Date(q.startDeadline);
	const endDeadlineDate = new Date(q.endDeadline);

	return (
		<QuestionDetailModal question={q}>
			<MotionTableRow
				initial={{ opacity: 0, y: 6 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3, delay: index * 0.04 }}
				className={cn(
					"group cursor-pointer border-b last:border-none transition-colors",
					"hover:bg-muted/60",
					q.isNew && "bg-primary/4",
				)}
				onClick={() => onRowClick?.(q.id)}
			>
				<TableCell>
					<div className="relative inline-flex h-8 w-8 items-center justify-center">
						<HelpCircle className="h-4.5 w-4.5 text-primary/70" />
						{q.isNew && (
							<span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background" />
						)}
					</div>
				</TableCell>

				<TableCell className="font-medium">
					<div className="flex flex-col gap-0.5">
						<span className="line-clamp-2">{q.title}</span>

						<div className="sm:hidden flex items-center gap-1.5 mt-1">
							<Tag className="h-3 w-3 text-muted-foreground" />
							<span className="text-xs text-muted-foreground">
								{q.category.title}
							</span>
						</div>

						{q.type === "options" && q.options.length > 0 && (
							<span className="text-xs text-muted-foreground line-clamp-1 md:hidden">
								{q.options.map((o) => o.text).join(" • ")}
							</span>
						)}
					</div>
				</TableCell>

				<TableCell className="text-left hidden sm:table-cell">
					<Badge
						variant="secondary"
						className="text-xs font-normal px-2.5 py-0.5"
					>
						{q.category.title}
					</Badge>
				</TableCell>

				<TableCell className="text-center hidden md:table-cell">
					<Badge
						variant="outline"
						className={cn(
							"text-xs px-2.5 py-0.5",
							q.type === "text"
								? "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800/40"
								: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800/40",
						)}
					>
						{q.type === "text" ? (
							<Text className="h-3.5 w-3.5 mr-1.5 inline" />
						) : (
							<ListChecks className="h-3.5 w-3.5 mr-1.5 inline" />
						)}
						{q.type === "text" ? "Текст" : "Выбор"}
					</Badge>
				</TableCell>

				<TableCell className="hidden md:table-cell">
					<div className="flex items-center justify-center gap-3 text-xs">
						<div className="flex items-center gap-1 text-green-600 dark:text-green-400">
							<CheckCircle2 className="h-3.5 w-3.5" />
							<span>{q.answersCount.success}</span>
						</div>
						<div className="flex items-center gap-1 text-red-600 dark:text-red-400">
							<XCircle className="h-3.5 w-3.5" />
							<span>{q.answersCount.failed}</span>
						</div>

						{totalAnswers > 0 ? (
							<div className="h-1.5 w-20 bg-red-500/50 rounded-full overflow-hidden">
								<div
									className="h-full bg-green-500 transition-all"
									style={{ width: `${successRate}%` }}
								/>
							</div>
						) : (
							<div className="h-1.5 w-20 bg-muted rounded-full overflow-hidden">
								<div
									className="h-full bg-muted-foreground/20 transition-all"
									style={{ width: `100%` }}
								/>
							</div>
						)}
					</div>
				</TableCell>

				<TableCell className="text-right text-xs text-muted-foreground hidden sm:table-cell">
					{startDeadlineDate.toLocaleString()}
				</TableCell>

				<TableCell
					className={cn(
						"text-right text-sm font-medium",
						getDeadlineColorClass(endDeadlineDate),
					)}
				>
					<span className="sm:hidden text-xs">
						{getDeadlineLabel(endDeadlineDate)}
					</span>
					<div className="flex items-center justify-end gap-1.5 text-right text-xs text-muted-foreground hidden sm:table-cell">
						{endDeadlineDate.toLocaleString()}
					</div>
				</TableCell>
			</MotionTableRow>
		</QuestionDetailModal>
	);
}
