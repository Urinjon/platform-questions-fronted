// QuestionsList.tsx
"use client";

import { motion } from "motion/react";
import {
	ChevronRightIcon,
	HelpCircleIcon,
	ClockIcon,
	MessageSquareIcon,
} from "lucide-react";
import { cn } from "@shared/lib/utils";
import type { Question } from "@entities/question";
import { QuestionDetailModal } from "@features/question-display/detail";

// export type Question = {
//   id: string;
//   title: string;
//   hint?: string;
//   timeAgo?: string; // "3 часа назад", "вчера" и т.п.
//   answersCount?: number; // количество ответов/просмотров
//   isNew?: boolean;
// };

interface QuestionsListProps {
	questions: Question[];
	onQuestionClick?: (id: string) => void;
}

export function QuestionsList({
	questions,
	onQuestionClick,
}: QuestionsListProps) {
	return (
		<div className="space-y-3.5 py-2">
			{questions.map((q, index) => (
				<motion.div
					key={q.id}
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.38, delay: index * 0.055 }}
				>
					<QuestionDetailModal question={q}>
						<button
							type="button"
							onClick={() => onQuestionClick?.(q.id)}
							className={cn(
								"cursor-pointer group w-full relative flex items-center outline-none gap-4 rounded-xl border bg-card/70 p-4.5",
								"transition-all duration-300 ease-out",
								"hover:border-primary/30 hover:bg-card/95 hover:shadow-md",
								"active:scale-[0.988] active:duration-150",
							)}
						>
							{/* Левая акцентная полоска */}
							<div
								className={cn(
									"absolute left-0 top-0 h-full w-1.5 origin-top rounded-r",
									"bg-gradient-to-b from-primary to-primary/60",
									"transition-transform duration-300 ease-out",
									q.isNew ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100",
								)}
							/>

							{/* Иконка + статус */}
							<div className="relative">
								<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/8 text-primary/90 transition-colors group-hover:bg-primary/15">
									<HelpCircleIcon className="h-5.5 w-5.5" />
								</div>

								{q.isNew && (
									<div className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-background bg-green-500" />
								)}
							</div>

							{/* Основной контент */}
							<div className="min-w-0 flex-1">
								<div className="flex items-baseline justify-between gap-2">
									<h3 className="truncate font-medium leading-tight text-foreground">
										{q.title}
									</h3>

									{q.answersCount !== undefined && (
										<div className="hidden items-center gap-1.5 text-xs text-muted-foreground/80 sm:flex">
											<MessageSquareIcon className="h-3.5 w-3.5" />
											<span>{q.answersCount}</span>
										</div>
									)}
								</div>

								{q.hint && (
									<p className="mt-0.5 line-clamp-1 text-sm text-muted-foreground/75">
										{q.hint}
									</p>
								)}
							</div>

							{/* Правая часть */}
							<div className="hidden shrink-0 flex-col items-end gap-1 text-right sm:flex">
								{q.timeAgo && (
									<div className="flex items-center gap-1.5 text-xs text-muted-foreground/65">
										<ClockIcon className="h-3.5 w-3.5" />
										<span>{q.timeAgo}</span>
									</div>
								)}

								<ChevronRightIcon
									className={cn(
										"h-5 w-5 text-muted-foreground/60 transition-all duration-300",
										"group-hover:translate-x-0.5 group-hover:text-primary/80",
									)}
								/>
							</div>

							{/* Мобильный chevron */}
							<ChevronRightIcon className="h-5 w-5 text-muted-foreground/50 sm:hidden" />
						</button>
					</QuestionDetailModal>
				</motion.div>
			))}
		</div>
	);
}
