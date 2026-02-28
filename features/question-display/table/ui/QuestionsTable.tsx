"use client";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@ui-kit/ui/table";
import { Badge } from "@ui-kit/ui/badge";
import { cn } from "@shared/lib/utils";
import {
	HelpCircle,
	Text,
	ListChecks,
	Clock,
	CheckCircle2,
	XCircle,
	Tag,
} from "lucide-react";
import { motion } from "motion/react";
import type { Question } from "@entities/question";
import { QuestionDetailModal } from "@features/question-display/detail";
import { format, isPast, isToday, isTomorrow } from "date-fns";
import { ru } from "date-fns/locale";

const MotionTableRow = motion(TableRow);

type Props = {
	questions: Question[];
	onRowClick?: (id: string) => void;
};

export function QuestionsTable({ questions, onRowClick }: Props) {
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
		<div className="rounded-xl border bg-card/40 overflow-hidden">
			<Table>
				<TableHeader className="bg-muted/50">
					<TableRow className="hover:bg-transparent">
						<TableHead className="w-10"></TableHead>
						<TableHead>Вопрос</TableHead>
						<TableHead className="w-32 text-left hidden sm:table-cell">
							Категория
						</TableHead>
						<TableHead className="w-28 text-center hidden md:table-cell">
							Тип
						</TableHead>
						<TableHead className="w-48 text-center hidden md:table-cell">
							Правильно / Неправильно
						</TableHead>
						<TableHead className="w-32 text-center hidden lg:table-cell">
							Баллы
						</TableHead>
						<TableHead className="w-36 text-right hidden sm:table-cell">
							Начало
						</TableHead>
						<TableHead className="w-36 text-right">Дедлайн</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody>
					{questions.map((q, index) => {
						const totalAnswers =
							(q.answersCount?.success ?? 0) + (q.answersCount?.failed ?? 0);
						const successRate =
							totalAnswers > 0
								? (q.answersCount.success / totalAnswers) * 100
								: 0;

						return (
							<QuestionDetailModal key={q.id} question={q}>
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
									{/* Иконка + new метка */}
									<TableCell>
										<div className="relative inline-flex h-8 w-8 items-center justify-center">
											<HelpCircle className="h-4.5 w-4.5 text-primary/70" />
											{q.isNew && (
												<span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background" />
											)}
										</div>
									</TableCell>

									{/* Вопрос + категория на мобильных */}
									<TableCell className="font-medium">
										<div className="flex flex-col gap-0.5">
											<span className="line-clamp-2">{q.title}</span>

											{/* Категория на маленьких экранах */}
											<div className="sm:hidden flex items-center gap-1.5 mt-1">
												<Tag className="h-3 w-3 text-muted-foreground" />
												<span className="text-xs text-muted-foreground">
													{q.category.title}
												</span>
											</div>

											{q.options && q.options.length > 0 && (
												<span className="text-xs text-muted-foreground line-clamp-1 md:hidden">
													{q.options.map((o) => o.text).join(" • ")}
												</span>
											)}
										</div>
									</TableCell>

									{/* Категория (полноценная колонка на sm+) */}
									<TableCell className="text-left hidden sm:table-cell">
										<Badge
											variant="secondary"
											className="text-xs font-normal px-2.5 py-0.5"
										>
											{q.category.title}
										</Badge>
									</TableCell>

									{/* Тип вопроса */}
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

									{/* Статистика ответов */}
									<TableCell className="hidden md:table-cell">
										{totalAnswers > 0 ? (
											<div className="flex items-center justify-center gap-3 text-xs">
												<div className="flex items-center gap-1 text-green-600 dark:text-green-400">
													<CheckCircle2 className="h-3.5 w-3.5" />
													<span>{q.answersCount.success}</span>
												</div>
												<div className="flex items-center gap-1 text-red-600 dark:text-red-400">
													<XCircle className="h-3.5 w-3.5" />
													<span>{q.answersCount.failed}</span>
												</div>

												<div className="h-1.5 w-20 bg-muted rounded-full overflow-hidden">
													<div
														className="h-full bg-green-500 transition-all"
														style={{ width: `${successRate}%` }}
													/>
												</div>
											</div>
										) : (
											<span className="text-muted-foreground text-xs italic">
												—
											</span>
										)}
									</TableCell>

									{/* Баллы */}
									<TableCell className="text-center text-sm font-medium hidden lg:table-cell">
										{q.points ? `${q.points} балл.` : "—"}
									</TableCell>

									{/* Начало */}
									<TableCell className="text-right text-xs text-muted-foreground hidden sm:table-cell">
										{format(q.startDeadline, "dd.MM HH:mm", { locale: ru })}
									</TableCell>

									{/* Дедлайн */}
									<TableCell
										className={cn(
											"text-right text-sm font-medium",
											getDeadlineColor(q.endDeadline),
										)}
									>
										<div className="flex items-center justify-end gap-1.5">
											<Clock className="h-3.5 w-3.5 opacity-70" />
											<span>{getDeadlineLabel(q.endDeadline)}</span>
										</div>
									</TableCell>
								</MotionTableRow>
							</QuestionDetailModal>
						);
					})}
				</TableBody>
			</Table>

			{questions.length === 0 && (
				<div className="py-16 text-center text-muted-foreground">
					Нет вопросов по выбранным фильтрам
				</div>
			)}
		</div>
	);
}
