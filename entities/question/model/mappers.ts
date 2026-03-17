import type { Question } from "./types";
import type { QuestionDto } from "./dto";

export function mapQuestionDto(dto: QuestionDto): Question {
	if (dto.type === "options" && dto.payload?.options) {
		return {
			id: dto.id,
			title: dto.title,
			type: "options",
			answersCount: dto.answersCount,
			category: dto.category,
			isNew: dto.isNew,
			startDeadline: dto.startDeadline,
			endDeadline: dto.endDeadline,
			options: dto.payload.options,
		};
	}

	return {
		id: dto.id,
		title: dto.title,
		type: "text",
		answersCount: dto.answersCount,
		category: dto.category,
		isNew: dto.isNew,
		startDeadline: dto.startDeadline,
		endDeadline: dto.endDeadline,
	};
}

export function mapQuestionDtoList(dtos: QuestionDto[]): Question[] {
	return dtos.map(mapQuestionDto);
}
