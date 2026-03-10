import { AlertDialogCancel, AlertDialogFooter } from "@ui-kit/ui/alert-dialog";
import { Button } from "@ui-kit/ui/button";
import { Spinner } from "@ui-kit/ui/spinner";
import { ChevronLeftIcon, SendIcon } from "lucide-react";

interface IQuestionDetailFooterProps {
	onClose: () => void;
	submitted: boolean;
	isOptionsType: boolean;
	isTextType: boolean;
	selected: string | undefined;
	setSelected: (value: string) => void;
	textAnswer: string;
	setTextAnswer: (value: string) => void;
	canSubmit: boolean;
	handleSubmit: () => void;
}

export const QuestionDetailFooter: React.FC<IQuestionDetailFooterProps> = ({
	onClose,
	submitted,
	isOptionsType,
	isTextType,
	selected,
	setSelected,
	textAnswer,
	setTextAnswer,
	canSubmit,
	handleSubmit,
}) => {
	return (
		<AlertDialogFooter className="px-6 py-5 border-t border-border flex-col-reverse sm:flex-row sm:justify-between gap-4 bg-muted/30">
			<AlertDialogCancel
				onClick={onClose}
				className="sm:w-auto border-input text-muted-foreground hover:bg-muted"
			>
				<ChevronLeftIcon className="mr-2 h-4 w-4" />
				Назад
			</AlertDialogCancel>

			<div className="flex gap-3 w-full sm:w-auto">
				{submitted ? (
					<Button disabled className="flex-1 sm:flex-none">
						<Spinner />
					</Button>
				) : (
					<>
						{(isOptionsType || isTextType) && (
							<Button
								variant="outline"
								className="flex-1 sm:flex-none border-input"
								disabled={isOptionsType ? !selected : !textAnswer.trim()}
								onClick={() => {
									if (isOptionsType) setSelected("");
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
							<SendIcon className="h-4 w-4" />
						</Button>
					</>
				)}
			</div>
		</AlertDialogFooter>
	);
};
