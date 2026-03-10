import type { Question } from "@entities/question";
import { cn } from "@shared/lib/utils";
import { Badge } from "@ui-kit/ui/badge";
import { Progress } from "@ui-kit/ui/progress";
import { ClockIcon, ListChecksIcon, TagIcon, TextIcon } from "lucide-react";

import { format, isPast, isToday, isTomorrow } from "date-fns";
import { ru } from "date-fns/locale";

interface IQuestionDetailHeaderProps {
	question: Question;
	isTextType: boolean;
	totalAnswers: number;
	successRate: number;
	endDeadlineDate: Date;
}

export const QuestionDetailHeader: React.FC<IQuestionDetailHeaderProps> = ({
	question,
	isTextType,
	totalAnswers,
	successRate,
	endDeadlineDate,
}) => {
	const getDeadlineLabel = (date: Date) => {
		if (isPast(date)) return "Просрочен";
		if (isToday(date)) return "Сегодня";
		if (isTomorrow(date)) return "Завтра";
		return format(date, "d MMM yyyy", { locale: ru });
	};

	const getDeadlineColor = (date: Date) => {
		if (isPast(date)) return "text-destructive";
		if (isToday(date) || isTomorrow(date))
			return "text-orange-600 dark:text-orange-400";
		return "text-muted-foreground";
	};

	return (
		<div className="bg-gradient-to-r from-primary/70 via-primary/50 to-primary/30 px-6 py-5 border-b border-border/40">
			<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
				<div className="flex items-center gap-3 flex-wrap">
					<Badge variant="outline" className="text-sm">
						Вопрос {question.id}
					</Badge>

					<div className="flex items-center gap-2">
						<Badge variant="secondary" className="gap-1.5">
							<TagIcon className="h-3.5 w-3.5" />
							{question.category.title}
						</Badge>

						<Badge
							variant="outline"
							className={cn(
								"gap-1.5 px-3",
								isTextType
									? "bg-blue-50/50 text-blue-700 border-blue-200 dark:bg-blue-950/30 dark:text-blue-300 dark:border-blue-800/40"
									: "bg-purple-50/50 text-purple-700 border-purple-200 dark:bg-purple-950/30 dark:text-purple-300 dark:border-purple-800/40",
							)}
						>
							{isTextType ? (
								<TextIcon className="h-3.5 w-3.5" />
							) : (
								<ListChecksIcon className="h-3.5 w-3.5" />
							)}
							{isTextType ? "Текст" : "Выбор"}
						</Badge>
					</div>
				</div>

				<div
					className={cn(
						"flex items-center gap-2 text-sm font-medium",
						getDeadlineColor(endDeadlineDate),
					)}
				>
					<ClockIcon className="h-4 w-4" />
					<span>до {getDeadlineLabel(endDeadlineDate)}</span>
				</div>
			</div>

			{totalAnswers > 0 && (
				<div className="mt-4 space-y-1.5">
					<div className="flex justify-between text-xs text-muted-foreground">
						<Badge>Статистика ответов</Badge>
						<Badge>{successRate.toFixed(0)}% верно</Badge>
					</div>
					<div className="flex items-center gap-3">
						<Progress value={successRate} className="h-2" />
						<div className="flex items-center gap-3 text-xs whitespace-nowrap">
							<span className="text-green-600 dark:text-green-400">
								{question.answersCount.success}
							</span>
							<span className="text-red-600 dark:text-red-400">
								{question.answersCount.failed}
							</span>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
