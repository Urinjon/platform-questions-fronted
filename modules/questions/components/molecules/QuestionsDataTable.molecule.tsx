"use client";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@ui-kit/ui/table";
import { Badge } from "@ui-kit/ui/badge";
import { cn } from "@shared/lib/utils";
import { Clock, MessageSquare, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import type { Question } from "./QuestionsList.molecule";

// Создаем анимированную версию TableRow
const MotionTableRow = motion(TableRow);

type Props = {
	questions: Question[];
	onRowClick?: (id: string) => void;
};

export function QuestionsDataTable({ questions, onRowClick }: Props) {
	return (
		<div className="rounded-xl border bg-card/50 overflow-hidden">
			<Table>
				<TableHeader className="bg-muted/40">
					<TableRow>
						<TableHead className="w-10"></TableHead>
						<TableHead>Вопрос</TableHead>
						<TableHead className="hidden md:table-cell">Подсказка</TableHead>
						<TableHead className="w-24 text-center">Ответы</TableHead>
						<TableHead className="w-36 text-right">Когда</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody>
					{questions.map((q, i) => (
						<MotionTableRow
							key={q.id}
							initial={{ opacity: 0, y: 8 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: i * 0.04 }}
							className={cn(
								"group cursor-pointer border-b last:border-0",
								"hover:bg-muted/60 transition-colors",
								q.isNew && "bg-primary/5",
							)}
							onClick={() => onRowClick?.(q.id)}
						>
							<TableCell>
								<div className="relative inline-flex">
									<HelpCircle className="h-4.5 w-4.5 text-primary/70" />
									{q.isNew && (
										<span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-background" />
									)}
								</div>
							</TableCell>

							<TableCell className="font-medium">
								<div className="flex flex-col">
									<span>{q.title}</span>
									<span className="md:hidden text-xs text-muted-foreground mt-0.5">
										{q.hint}
									</span>
								</div>
							</TableCell>

							<TableCell className="hidden md:table-cell text-muted-foreground text-sm">
								{q.hint ? q.hint : "—"}
							</TableCell>

							<TableCell className="text-center">
								{q.answersCount !== undefined ? (
									<div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
										<MessageSquare className="h-3.5 w-3.5" />
										<Badge variant={"secondary"}>{q.answersCount}</Badge>
									</div>
								) : (
									"—"
								)}
							</TableCell>

							<TableCell className="text-right text-xs text-muted-foreground">
								{q.timeAgo ? (
									<div className="inline-flex items-center gap-1.5">
										<Clock className="h-3.5 w-3.5" />
										<span>{q.timeAgo}</span>
									</div>
								) : (
									"—"
								)}
							</TableCell>
						</MotionTableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
