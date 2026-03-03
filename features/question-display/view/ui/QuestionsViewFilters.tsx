import { Input } from "@ui-kit/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@ui-kit/ui/select";
import { Card } from "@ui-kit/ui/card";
import { Funnel, Search, SortDesc } from "lucide-react";

import type {
	QuestionsSortBy,
	QuestionsStatusFilter,
} from "../model/use-questions-view";

interface QuestionsViewFiltersProps {
	search: string;
	statusFilter: QuestionsStatusFilter;
	sortBy: QuestionsSortBy;
	onSearchChange: (value: string) => void;
	onStatusFilterChange: (value: QuestionsStatusFilter) => void;
	onSortByChange: (value: QuestionsSortBy) => void;
}

export function QuestionsViewFilters(props: QuestionsViewFiltersProps) {
	const {
		search,
		statusFilter,
		sortBy,
		onSearchChange,
		onStatusFilterChange,
		onSortByChange,
	} = props;

	return (
		<Card className="border-muted bg-muted/40 px-3 py-2 shadow-none sm:px-4 sm:py-3">
			<div className="flex w-full flex-col gap-2 md:flex-row md:items-center md:justify-between">
				<div className="flex w-full items-center gap-2 md:max-w-md">
					<div className="flex items-center gap-1 rounded-md border bg-background px-2">
						<Search className="h-4 w-4 text-muted-foreground" />
						<Input
							placeholder="Поиск по вопросу или подсказке..."
							value={search}
							onChange={(event) => onSearchChange(event.target.value)}
							className="h-8 border-0 bg-transparent px-1 text-sm shadow-none focus-visible:ring-0"
						/>
					</div>
				</div>

				<div className="flex flex-wrap items-center gap-2 md:justify-end">
					<div className="flex items-center gap-1 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
						<Funnel className="h-3 w-3" />
						<span>Фильтры</span>
					</div>

					<Select value={statusFilter} onValueChange={onStatusFilterChange}>
						<SelectTrigger className="h-8 w-36 text-xs">
							<SelectValue placeholder="Статус" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">Все</SelectItem>
							<SelectItem value="new">Новые</SelectItem>
							<SelectItem value="answered">С ответами</SelectItem>
							<SelectItem value="unanswered">Без ответов</SelectItem>
						</SelectContent>
					</Select>

					<div className="flex items-center gap-1">
						<SortDesc className="h-3 w-3 text-muted-foreground" />
						<Select value={sortBy} onValueChange={onSortByChange}>
							<SelectTrigger className="h-8 w-40 text-xs">
								<SelectValue placeholder="Сортировка" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="newest">Сначала новые</SelectItem>
								<SelectItem value="oldest">Сначала старые</SelectItem>
								<SelectItem value="answers">По кол-ву ответов</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
			</div>
		</Card>
	);
}
