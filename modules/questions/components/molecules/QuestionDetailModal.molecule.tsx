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
import { Clock, HelpCircle, ChevronLeft, SendIcon } from "lucide-react";
import { cn } from "@shared/lib/utils";
import React from "react";
import type { Question } from "@modules/questions/questions.model";
import { Badge } from "@ui-kit/ui/badge";

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

		// Опционально: авто-закрытие через 1–1.5 сек
		// setTimeout(() => onClose?.(), 1200);
	};

	const canSubmit = isOptionsType ? !!selected : !!textAnswer.trim();

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>{children}</AlertDialogTrigger>

			<AlertDialogContent className="max-w-2xl sm:max-w-[min(90vw,640px)] p-0 gap-0 overflow-hidden">
				{/* Header */}
				<div className="bg-gradient-to-r from-primary/60 to-secondary px-6 py-4 border-b border-slate-700">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-3">
							<span className="text-sm font-medium text-slate-400">
								<Badge variant="secondary">Вопрос {question.id}</Badge>
							</span>
							{question.points && (
								<Badge variant={"success"}>+{question.points} баллов</Badge>
							)}
						</div>

						{question.timeLimitSeconds && (
							<div className="flex items-center gap-2 text-sm text-primary">
								<Clock className="h-4 w-4" />
								<span>{question.timeAgo}</span>
							</div>
						)}
					</div>

					<Progress
						value={33} // ← можно сделать динамическим
						className="mt-4 h-1 bg-slate-700"
						// indicatorClassName="bg-violet-600"
					/>
				</div>

				{/* Контент */}
				<div className="p-6 sm:p-8 space-y-8">
					<AlertDialogHeader className="text-center sm:text-left">
						<AlertDialogTitle className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight text-slate-100">
							{question.title}
						</AlertDialogTitle>

						{question.hint && (
							<div className="mt-3 flex items-start gap-2 text-slate-400 text-sm">
								<HelpCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
								<p>{question.hint}</p>
							</div>
						)}
					</AlertDialogHeader>

					{/* Разные поля ввода в зависимости от типа */}
					{isOptionsType && question.options && (
						<RadioGroup
							value={selected}
							onValueChange={setSelected}
							className="space-y-3 sm:space-y-4"
							disabled={submitted}
						>
							{question.options.map((option) => (
								<Button
									variant={"secondary"}
									key={option.id}
									className={cn(
										"relative flex items-center rounded-xl border px-5 py-4 sm:py-5 transition-all duration-200",
										"cursor-pointer select-none group",
										selected === option.id
											? "border-primary bg-primary/40 shadow-sm hover:bg-primary/60"
											: "border-secondary hover:border-primary bg-secondary/50 hover:bg-primary/60",
										submitted && "pointer-events-none opacity-70",
									)}
									onClick={() => !submitted && setSelected(option.id)}
								>
									<RadioGroupItem
										value={option.id}
										id={option.id}
										className="sr-only"
									/>
									<Label
										htmlFor={option.id}
										className="flex-1 cursor-pointer text-base sm:text-lg font-medium leading-relaxed text-slate-200 group-hover:text-slate-100 transition-colors"
									>
										{option.text}
									</Label>
								</Button>
							))}
						</RadioGroup>
					)}

					{isTextType && (
						<div className="space-y-4">
							<Textarea
								value={textAnswer}
								onChange={(e) => setTextAnswer(e.target.value)}
								placeholder="Ваш ответ..."
								disabled={submitted}
								className="min-h-[120px] sm:min-h-[140px] resize-none bg-slate-900/60 border-slate-700 focus:border-violet-500 focus:ring-violet-500/30 text-slate-100 placeholder:text-slate-500"
								autoFocus
							/>
							<p className="text-xs text-slate-500 text-right">
								{textAnswer.length} символов
							</p>
						</div>
					)}
				</div>

				{/* Footer */}
				<AlertDialogFooter className="px-6 py-5 border-t border-slate-700 flex-col-reverse sm:flex-row sm:justify-between gap-4">
					<AlertDialogCancel
						onClick={onClose}
						className="sm:w-auto border-slate-700 text-slate-300 hover:bg-slate-800"
					>
						<ChevronLeft className="mr-2 h-4 w-4" />
						Назад
					</AlertDialogCancel>

					<div className="flex gap-3 w-full sm:w-auto">
						{isOptionsType && (
							<Button
								variant="outline"
								className="flex-1 sm:flex-none border-slate-600"
								disabled={!selected || submitted}
								onClick={() => setSelected(undefined)}
							>
								Сбросить
							</Button>
						)}

						{isTextType && (
							<Button
								variant="outline"
								className="flex-1 sm:flex-none border-slate-600"
								disabled={!textAnswer.trim() || submitted}
								onClick={() => setTextAnswer("")}
							>
								Очистить
							</Button>
						)}

						<Button disabled={!canSubmit || submitted} onClick={handleSubmit}>
							{submitted ? (
								"Отправлено..."
							) : (
								<>
									Ответить
									<SendIcon className="h-4 w-4" />
								</>
							)}
						</Button>
					</div>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};
