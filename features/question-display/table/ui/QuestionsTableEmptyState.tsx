"use client";

type Props = {
	isVisible: boolean;
};

export function QuestionsTableEmptyState({ isVisible }: Props) {
	if (!isVisible) return null;

	return (
		<div className="py-16 text-center text-muted-foreground">
			Нет вопросов по выбранным фильтрам
		</div>
	);
}
