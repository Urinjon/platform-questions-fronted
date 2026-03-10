"use client";

import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogTrigger,
} from "@ui-kit/ui/alert-dialog";

import React from "react";
import type { Question } from "@entities/question";

import { QuestionDetailHeader } from "./QuestionDetailHeader";
import { QuestionDetailBody } from "./QuestionDetailBody";
import { QuestionDetailFooter } from "./QuestionDetailFooter";

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

	const endDeadlineDate = new Date(question.endDeadline);

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
	};

	const canSubmit = isOptionsType ? !!selected : !!textAnswer.trim();

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>{children}</AlertDialogTrigger>

			<AlertDialogContent className="max-w-2xl sm:max-w-[min(92vw,720px)] p-0 gap-0 overflow-hidden rounded-2xl">
				<QuestionDetailHeader
					question={question}
					isTextType={isTextType}
					totalAnswers={totalAnswers}
					successRate={successRate}
					endDeadlineDate={endDeadlineDate}
				/>

				<QuestionDetailBody
					question={question}
					selected={selected}
					setSelected={setSelected}
					submitted={submitted}
					textAnswer={textAnswer}
					setTextAnswer={setTextAnswer}
				/>

				<QuestionDetailFooter
					onClose={onClose ?? (() => {})}
					submitted={submitted}
					isOptionsType={isOptionsType}
					isTextType={isTextType}
					selected={selected}
					setSelected={setSelected}
					textAnswer={textAnswer}
					setTextAnswer={setTextAnswer}
					canSubmit={canSubmit}
					handleSubmit={handleSubmit}
				/>
			</AlertDialogContent>
		</AlertDialog>
	);
};
