"use client";

import {
	AlertBody,
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@ui-kit/ui/alert-dialog";
import { Button } from "@ui-kit/ui/button";
import { Calendar } from "@ui-kit/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@ui-kit/ui/popover";
import { CalendarIcon } from "lucide-react";
import React from "react";

interface IQuestionDetailModalProps {
	children: React.ReactNode;
	questionId: string;
}

export const QuestionDetailModal: React.FC<IQuestionDetailModalProps> = ({
	children,
	questionId,
}) => {
	console.log("Question ID:", questionId);
	const [date, setDate] = React.useState<Date | undefined>(new Date());
	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Question Detail</AlertDialogTitle>
					<AlertDialogDescription>
						Тут будет содержимое вопрса
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertBody>
					<p>Вопрос №{questionId}</p>

					<Popover>
						<PopoverTrigger asChild>
							<Button variant="outline">
								<CalendarIcon />
							</Button>
						</PopoverTrigger>
						<PopoverContent>
							<Calendar mode="single" selected={date} onSelect={setDate} />
						</PopoverContent>
					</Popover>
				</AlertBody>
				<AlertDialogFooter>
					<AlertDialogCancel>Назад</AlertDialogCancel>
					<AlertDialogAction>Ответить</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};
