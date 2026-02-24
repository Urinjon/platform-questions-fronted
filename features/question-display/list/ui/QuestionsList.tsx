"use client";

import { motion } from "framer-motion";
import {
	ChevronRight,
	HelpCircle,
	Clock,
	CheckCircle2,
	XCircle,
	Tag,
	Text,
	ListChecks,
} from "lucide-react";
import { cn } from "@shared/lib/utils";
import type { Question } from "@entities/question";
import { QuestionDetailModal } from "@features/question-display/detail";
import { format, isPast, isToday, isTomorrow } from "date-fns";
import { ru } from "date-fns/locale";

interface QuestionsListProps {
	questions: Question[];
	onQuestionClick?: (id: string) => void;
}

export function QuestionsList({
	questions,
	onQuestionClick,
}: QuestionsListProps) {
	const getDeadlineLabel = (date: Date) => {
		if (isPast(date)) return "Просрочен";
		if (isToday(date)) return "Сегодня";
		if (isTomorrow(date)) return "Завтра";
		return format(date, "d MMM", { locale: ru });
	};

	const getDeadlineColor = (date: Date) => {
		if (isPast(date)) return "text-destructive";
		if (isToday(date) || isTomorrow(date))
			return "text-orange-600 dark:text-orange-400";
		return "text-muted-foreground";
	};

	return (
		<div className="space-y-3.5 py-2">
			{questions.map((q, index) => {
				const totalAnswers =
					(q.answersCount?.success ?? 0) + (q.answersCount?.failed ?? 0);
				const successRate =
					totalAnswers > 0 ? (q.answersCount.success / totalAnswers) * 100 : 0;

				return (
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
									"group w-full relative flex flex-col sm:flex-row sm:items-center gap-4 rounded-xl border bg-card/70 p-4.5",
									"transition-all duration-300 ease-out cursor-pointer",
									"hover:border-primary/30 hover:bg-card/95 hover:shadow-md",
									"active:scale-[0.988] active:duration-150",
									q.isNew && "bg-primary/3 border-primary/20",
								)}
							>
								{/* Левая акцентная полоска */}
								<div
									className={cn(
										"absolute left-0 top-0 h-full w-1.5 origin-top rounded-r",
										"bg-gradient-to-b from-primary to-primary/60",
										"transition-transform duration-300 ease-out",
										q.isNew
											? "scale-y-100"
											: "scale-y-0 group-hover:scale-y-100",
									)}
								/>

								{/* Иконка + new метка */}
								<div className="relative shrink-0">
									<div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
										<HelpCircle className="h-5.5 w-5.5" />
									</div>
									{q.isNew && (
										<span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-green-500 ring-2 ring-background" />
									)}
								</div>

								{/* Основной контент */}
								<div className="min-w-0 flex-1 space-y-1.5">
									{/* Заголовок + категория */}
									<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-3">
										<h3 className="font-medium leading-tight text-foreground line-clamp-2">
											{q.title}
										</h3>

										<div className="flex items-center gap-2">
											<div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
												<Tag className="h-3.5 w-3.5" />
												<span className="font-medium">{q.category.title}</span>
											</div>

											<div className="hidden sm:flex items-center gap-1.5">
												{q.type === "text" ? (
													<div className="inline-flex items-center gap-1 text-xs bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded">
														<Text className="h-3.5 w-3.5" />
														Текст
													</div>
												) : (
													<div className="inline-flex items-center gap-1 text-xs bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 px-2 py-0.5 rounded">
														<ListChecks className="h-3.5 w-3.5" />
														Выбор
													</div>
												)}
											</div>
										</div>
									</div>

									{/* Метрики */}
									<div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
										{totalAnswers > 0 ? (
											<>
												<div className="flex items-center gap-1.5">
													<CheckCircle2 className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
													<span>{q.answersCount.success}</span>
												</div>
												<div className="flex items-center gap-1.5">
													<XCircle className="h-3.5 w-3.5 text-red-600 dark:text-red-400" />
													<span>{q.answersCount.failed}</span>
												</div>

												{/* Мини-прогресс */}
												<div className="h-1.5 w-16 bg-muted rounded-full overflow-hidden">
													<div
														className="h-full bg-green-500"
														style={{ width: `${successRate}%` }}
													/>
												</div>
											</>
										) : (
											<span>Нет ответов</span>
										)}

										{q.points && (
											<div className="flex items-center gap-1.5">
												<span className="font-medium">{q.points}</span>
												<span>балл{q.points > 1 ? "а" : ""}</span>
											</div>
										)}
									</div>

									{/* Дедлайн */}
									<div className="flex items-center gap-1.5 text-xs">
										<Clock className="h-3.5 w-3.5 opacity-70" />
										<span
											className={cn(
												"font-medium",
												getDeadlineColor(q.endDeadline),
											)}
										>
											до {getDeadlineLabel(q.endDeadline)}
										</span>
									</div>
								</div>

								{/* Правая стрелка (всегда видна) */}
								<div className="hidden sm:flex shrink-0 items-center">
									<ChevronRight
										className={cn(
											"h-5 w-5 text-muted-foreground/60 transition-transform",
											"group-hover:translate-x-1 group-hover:text-primary/80",
										)}
									/>
								</div>

								{/* Мобильная стрелка */}
								<ChevronRight className="h-5 w-5 text-muted-foreground/50 sm:hidden absolute right-4 top-1/2 -translate-y-1/2" />
							</button>
						</QuestionDetailModal>
					</motion.div>
				);
			})}
		</div>
	);
}
