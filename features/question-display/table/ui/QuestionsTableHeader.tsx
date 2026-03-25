"use client";

import { TableHead, TableHeader, TableRow } from "@ui-kit/ui/table";

export function QuestionsTableHeader() {
	return (
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
				<TableHead className="w-36 text-right hidden sm:table-cell">
					Начало
				</TableHead>
				<TableHead className="w-36 text-right">Дедлайн</TableHead>
			</TableRow>
		</TableHeader>
	);
}

