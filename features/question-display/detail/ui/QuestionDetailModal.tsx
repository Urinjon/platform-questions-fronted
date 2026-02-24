"use client";

import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@ui-kit/ui/alert-dialog";
import { Button } from "@ui-kit/ui/button";
import { RadioGroup, RadioGroupItem } from "@ui-kit/ui/radio-group";
import { Label } from "@ui-kit/ui/label";
import { Textarea } from "@ui-kit/ui/textarea";
import { Progress } from "@ui-kit/ui/progress";
import { Badge } from "@ui-kit/ui/badge";
import {
	Clock,
	ChevronLeft,
	Send,
	Tag,
	Text as TextIcon,
	ListChecks,
	CheckCircle2,
	XCircle,
} from "lucide-react";
import { cn } from "@shared/lib/utils";
import React from "react";
import type { Question } from "@entities/question";
import { format, isPast, isToday, isTomorrow } from "date-fns";
import { ru } from "date-fns/locale";

interface QuestionDetailModalProps {
	children: React.ReactNode;
	question: Question;
	onAnswer?: (answer: string | string[]) => void;
	onClose?: () => void;
}

export const QuestionDetailModal: React.FC<QuestionDetailModalProps> = ({
	children,
	question,
	onAnswer,
	onClose,
}) => {
	const [selected, setSelected] = React.useState<string | undefined>(undefined);
	const [textAnswer, setTextAnswer] = React.useState("");
	const [submitted, setSubmitted] = React.useState(false);

	const isOptionsType = question.type === "options";
	const isTextType = question.type === "text";

	const totalAnswers =
		(question.answersCount?.success ?? 0) +
		(question.answersCount?.failed ?? 0);
	const successRate =
		totalAnswers > 0 ? (question.answersCount.success / totalAnswers) * 100 : 0;

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

	const handleSubmit = () => {
		if (submitted) return;

		let answer: string | string[] = "";

		if (isOptionsType) {
			if (!selected) return;
			answer = selected;
		} else if (isTextType) {
			if (!textAnswer.trim()) return;
			answer = textAnswer.trim();
		}

		setSubmitted(true);
		onAnswer?.(answer);

		// Можно добавить авто-закрытие через 1.5–2 секунды
		// setTimeout(() => onClose?.(), 1800);
	};

	const canSubmit = isOptionsType ? !!selected : !!textAnswer.trim();

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>{children}</AlertDialogTrigger>

			<AlertDialogContent className="max-w-2xl sm:max-w-[min(92vw,720px)] p-0 gap-0 overflow-hidden rounded-2xl">
				{/* Header */}
				<div className="bg-gradient-to-r from-primary/70 via-primary/50 to-primary/30 px-6 py-5 border-b border-border/40">
					<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
						<div className="flex items-center gap-3 flex-wrap">
							<Badge variant="outline" className="text-sm">
								Вопрос {question.id}
							</Badge>

							<div className="flex items-center gap-2">
								<Badge variant="secondary" className="gap-1.5">
									<Tag className="h-3.5 w-3.5" />
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
										<ListChecks className="h-3.5 w-3.5" />
									)}
									{isTextType ? "Текст" : "Выбор"}
								</Badge>
							</div>

							{question.points && (
								<Badge variant="success" className="text-sm">
									+{question.points} балл{question.points > 1 ? "а" : ""}
								</Badge>
							)}
						</div>

						<div
							className={cn(
								"flex items-center gap-2 text-sm font-medium",
								getDeadlineColor(question.endDeadline),
							)}
						>
							<Clock className="h-4 w-4" />
							<span>до {getDeadlineLabel(question.endDeadline)}</span>
						</div>
					</div>

					{/* Прогресс ответов (если есть данные) */}
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

				{/* Основной контент */}
				<div className="p-6 sm:p-8 space-y-7 bg-gradient-to-b from-background/80 to-background">
					<AlertDialogHeader>
						<AlertDialogTitle className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
							{question.title}
						</AlertDialogTitle>
					</AlertDialogHeader>

					{/* Варианты ответа */}
					{isOptionsType && question.options && (
						<RadioGroup
							value={selected}
							onValueChange={setSelected}
							className="space-y-3 sm:space-y-4"
							disabled={submitted}
						>
							{question.options.map((option) => (
								<button
									type="button"
									key={option.id}
									onClick={() => !submitted && setSelected(option.id)}
									className={cn(
										"relative w-full flex items-center rounded-xl border px-5 py-4 sm:py-5 transition-all duration-200 cursor-pointer group",
										selected === option.id
											? "border-primary bg-primary/15 shadow-sm"
											: "border-border hover:border-primary/50 bg-card/50 hover:bg-primary/5",
										submitted && "opacity-75 pointer-events-none",
									)}
								>
									<RadioGroupItem
										value={option.id}
										id={option.id}
										className="sr-only"
									/>
									<Label
										htmlFor={option.id}
										className="flex-1 cursor-pointer text-base sm:text-lg font-medium leading-relaxed"
									>
										{option.text}
									</Label>

									{/* Показываем правильность после отправки (если знаете правильный ответ) */}
									{submitted && option.isCorrect !== undefined && (
										<div className="ml-3">
											{option.isCorrect ? (
												<CheckCircle2 className="h-5 w-5 text-green-500" />
											) : (
												<XCircle className="h-5 w-5 text-red-500" />
											)}
										</div>
									)}
								</button>
							))}
						</RadioGroup>
					)}

					{isTextType && (
						<div className="space-y-4">
							<Textarea
								value={textAnswer}
								onChange={(e) => setTextAnswer(e.target.value)}
								placeholder="Введите ваш ответ..."
								disabled={submitted}
								className="min-h-[140px] sm:min-h-[160px] resize-none bg-background/60 border-input focus-visible:ring-primary/40"
								autoFocus
							/>
							<div className="flex justify-end">
								<span className="text-sm text-muted-foreground">
									{textAnswer.length} символов
								</span>
							</div>
						</div>
					)}
				</div>

				{/* Footer */}
				<AlertDialogFooter className="px-6 py-5 border-t border-border flex-col-reverse sm:flex-row sm:justify-between gap-4 bg-muted/30">
					<AlertDialogCancel
						onClick={onClose}
						className="sm:w-auto border-input text-muted-foreground hover:bg-muted"
					>
						<ChevronLeft className="mr-2 h-4 w-4" />
						Назад
					</AlertDialogCancel>

					<div className="flex gap-3 w-full sm:w-auto">
						{submitted ? (
							<Button disabled className="flex-1 sm:flex-none">
								Отправлено...
							</Button>
						) : (
							<>
								{(isOptionsType || isTextType) && (
									<Button
										variant="outline"
										className="flex-1 sm:flex-none border-input"
										disabled={isOptionsType ? !selected : !textAnswer.trim()}
										onClick={() => {
											if (isOptionsType) setSelected(undefined);
											if (isTextType) setTextAnswer("");
										}}
									>
										Очистить
									</Button>
								)}

								<Button
									disabled={!canSubmit}
									onClick={handleSubmit}
									className="flex-1 sm:flex-none gap-2"
								>
									Ответить
									<Send className="h-4 w-4" />
								</Button>
							</>
						)}
					</div>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};
