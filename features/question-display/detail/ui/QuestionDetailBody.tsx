import type { Question } from "@entities/question";
import { cn } from "@shared/lib/utils";
import { AlertDialogHeader, AlertDialogTitle } from "@ui-kit/ui/alert-dialog";
import { Label } from "@ui-kit/ui/label";
import { RadioGroup, RadioGroupItem } from "@ui-kit/ui/radio-group";
import { Textarea } from "@ui-kit/ui/textarea";
import { CheckCircle2Icon, XCircleIcon } from "lucide-react";

interface IQuestionDetailBodyProps {
	question: Question;
	selected: string | undefined;
	setSelected: (value: string) => void;
	submitted: boolean;
	textAnswer: string;
	setTextAnswer: (value: string) => void;
}

export const QuestionDetailBody: React.FC<IQuestionDetailBodyProps> = ({
	question,
	selected,
	setSelected,
	submitted,
	textAnswer,
	setTextAnswer,
}) => {
	return (
		<div className="p-6 sm:p-8 space-y-7 bg-gradient-to-b from-background/80 to-background">
			<AlertDialogHeader>
				<AlertDialogTitle className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
					{question.title}
				</AlertDialogTitle>
			</AlertDialogHeader>

			{question.type === "options" && (
				<RadioGroup
					value={selected}
					onValueChange={setSelected}
					className="space-y-3 sm:space-y-4"
					disabled={submitted}
				>
					{question.options.map((option) => (
						<div
							key={option.id}
							tabIndex={submitted ? -1 : 0}
							className={cn(
								"relative w-full flex items-center rounded-xl border px-5 py-4 sm:py-5 transition-all duration-200 cursor-pointer group",
								selected === String(option.id)
									? "border-primary bg-primary/15 shadow-sm"
									: "border-border hover:border-primary/50 bg-card/50 hover:bg-primary/5",
								submitted && "opacity-75 pointer-events-none cursor-default",
							)}
						>
							<RadioGroupItem
								onClick={() => !submitted && setSelected(String(option.id))}
								value={String(option.id)}
								id={String(option.id)}
								className="sr-only"
							/>
							<Label
								htmlFor={String(option.id)}
								className="flex-1 cursor-pointer text-base sm:text-lg font-medium leading-relaxed"
							>
								{option.text}
							</Label>

							{submitted && (
								<div className="ml-3">
									{option.isCorrect ? (
										<CheckCircle2Icon className="h-5 w-5 text-green-500" />
									) : (
										<XCircleIcon className="h-5 w-5 text-red-500" />
									)}
								</div>
							)}
						</div>
					))}
				</RadioGroup>
			)}

			{question.type === "text" && (
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
	);
};
