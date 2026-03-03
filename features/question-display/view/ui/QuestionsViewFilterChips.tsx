import { Badge } from "@ui-kit/ui/badge";
import { Button } from "@ui-kit/ui/button";
import { SlidersHorizontal, X } from "lucide-react";
import { motion } from "motion/react";

import type { QuestionsStatusFilter } from "../model/use-questions-view";

interface QuestionsViewFilterChipsProps {
	search: string;
	statusFilter: QuestionsStatusFilter;
	onClearSearch: () => void;
	onResetFilters: () => void;
	onResetStatusFilter: () => void;
}

export function QuestionsViewFilterChips(props: QuestionsViewFilterChipsProps) {
	const { search, statusFilter, onClearSearch, onResetFilters, onResetStatusFilter } =
		props;

	return (
		<motion.div
			initial={{ opacity: 0, y: -8 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -8 }}
			transition={{ duration: 0.18, ease: "easeOut" }}
			className="mt-2 rounded-lg border border-dashed border-muted bg-muted/40 px-3 py-2 text-xs text-muted-foreground sm:mt-3"
		>
			<div className="flex flex-wrap items-center gap-2">
				<div className="inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-wide">
					<SlidersHorizontal className="h-3 w-3" />
					<span>Активные фильтры</span>
				</div>

				<div className="flex flex-wrap items-center gap-2">
					{search && (
						<Badge
							variant="secondary"
							className="gap-1 rounded-full bg-background/80 pl-2 pr-1"
						>
							<span className="max-w-[160px] truncate">
								Поиск: <span className="font-medium">{search}</span>
							</span>
							<Button
								variant="ghost"
								size="icon"
								className="h-5 w-5"
								onClick={onClearSearch}
							>
								<X className="h-3 w-3" />
							</Button>
						</Badge>
					)}

					{statusFilter !== "all" && (
						<Badge
							variant="secondary"
							className="gap-1 rounded-full bg-background/80 pl-2 pr-1"
						>
							<span>
								{statusFilter === "new"
									? "Новые"
									: statusFilter === "answered"
										? "С ответами"
										: "Без ответов"}
							</span>
							<Button
								variant="ghost"
								size="icon"
								className="h-5 w-5"
								onClick={onResetStatusFilter}
							>
								<X className="h-3 w-3" />
							</Button>
						</Badge>
					)}
				</div>

				<div className="ml-auto">
					<Button
						variant="ghost"
						size="sm"
						className="h-7 px-2 text-[11px] font-medium"
						onClick={onResetFilters}
					>
						Сбросить всё
					</Button>
				</div>
			</div>
		</motion.div>
	);
}

