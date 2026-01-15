// QuestionsView.tsx
"use client";

import { useState } from "react";
import { useMediaQuery } from "@shared/hooks/use-media-query.hook";
import { QuestionsDataTable } from "../molecules/QuestionsDataTable.molecule";
import {
	type Question,
	QuestionsList,
} from "../molecules/QuestionsList.molecule";
import { Input } from "@ui-kit/ui/input";
import { Button } from "@ui-kit/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@ui-kit/ui/select";
import { Badge } from "@ui-kit/ui/badge";
import { X } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui-kit/ui/tabs";
import { ContainerTextFlip } from "@ui-kit/effects";

export function QuestionsView() {
	const isDesktop = useMediaQuery("(min-width: 768px)");

	const allQuestions: Question[] = [
		{
			id: "1",
			title: "Question 1",
			hint: "Hint 1",
			timeAgo: "1 hour ago",
			answersCount: 0,
			isNew: true,
		},
		{
			id: "2",
			title: "Question 2",
			hint: "Hint 2",
			timeAgo: "2 hours ago",
			answersCount: 1,
			isNew: false,
		},
		{
			id: "3",
			title: "Question 3",
			hint: "Hint 3",
			timeAgo: "3 hours ago",
			answersCount: 2,
			isNew: false,
		},
	];

	const [search, setSearch] = useState("");
	const [statusFilter, setStatusFilter] = useState("all"); // all | new | answered | unanswered
	const [sortBy, setSortBy] = useState("newest");

	// Фильтрация и сортировка (клиентская — для простоты)
	const filteredQuestions = allQuestions
		.filter((q) => {
			const matchesSearch =
				q.title.toLowerCase().includes(search.toLowerCase()) ||
				(q.hint?.toLowerCase().includes(search.toLowerCase()) ?? false);
			const matchesStatus =
				statusFilter === "all" ||
				(statusFilter === "new" && q.isNew) ||
				(statusFilter === "answered" && (q.answersCount ?? 0) > 0) ||
				(statusFilter === "unanswered" && (q.answersCount ?? 0) === 0);

			return matchesSearch && matchesStatus;
		})
		.sort((a, b) => {
			if (sortBy === "newest")
				return (b.timeAgo || "").localeCompare(a.timeAgo || "");
			if (sortBy === "oldest")
				return (a.timeAgo || "").localeCompare(b.timeAgo || "");
			if (sortBy === "answers")
				return (b.answersCount ?? 0) - (a.answersCount ?? 0);
			return 0;
		});

	const hasFilters = search || statusFilter !== "all";

	const resetFilters = () => {
		setSearch("");
		setStatusFilter("all");
		setSortBy("newest");
	};

	const handleClick = () => {
		console.log("Clicked!");
	};

	return (
		<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
			{/* Sticky шапка с фильтрами */}
			<div className="sticky top-0 z-20 -mx-4 bg-background/85 backdrop-blur-lg px-4 py-3 sm:px-6 lg:px-8 border-b shadow-sm">
				<div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
					<h1 className="text-2xl font-bold tracking-tight flex items-center gap-3">
						Ваши вопросы
						<ContainerTextFlip
							words={["Platform", "Questions", "Splashel", "For", "You"]}
							className="text-sm md:text-sm"
						/>
					</h1>

					<div className="flex flex-wrap items-center gap-2">
						<Input
							placeholder="Поиск по вопросу или подсказке..."
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							className="w-full min-w-[220px] md:w-72"
						/>

						<Select value={statusFilter} onValueChange={setStatusFilter}>
							<SelectTrigger className="w-40">
								<SelectValue placeholder="Статус" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">Все</SelectItem>
								<SelectItem value="new">Новые</SelectItem>
								<SelectItem value="answered">С ответами</SelectItem>
								<SelectItem value="unanswered">Без ответов</SelectItem>
							</SelectContent>
						</Select>

						<Select value={sortBy} onValueChange={setSortBy}>
							<SelectTrigger className="w-40">
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

				{/* Чипы применённых фильтров */}
				{hasFilters && (
					<div className="mt-3 flex flex-wrap gap-2">
						{search && (
							<Badge variant="secondary" className="gap-1 pl-2 pr-1">
								Поиск: {search}
								<Button
									variant="ghost"
									size="icon"
									className="h-5 w-5"
									onClick={() => setSearch("")}
								>
									<X className="h-3 w-3" />
								</Button>
							</Badge>
						)}

						{statusFilter !== "all" && (
							<Badge variant="secondary" className="gap-1 pl-2 pr-1">
								{statusFilter === "new"
									? "Новые"
									: statusFilter === "answered"
										? "С ответами"
										: "Без ответов"}
								<Button
									variant="ghost"
									size="icon"
									className="h-5 w-5"
									onClick={() => setStatusFilter("all")}
								>
									<X className="h-3 w-3" />
								</Button>
							</Badge>
						)}

						<Button
							variant="ghost"
							size="sm"
							className="h-7 text-xs"
							onClick={resetFilters}
						>
							Сбросить всё
						</Button>
					</div>
				)}
			</div>

			{/* Контент */}
			<div className="pt-6 pb-16">
				{isDesktop ? (
					<Tabs defaultValue="table">
						<TabsList className="mb-4">
							<TabsTrigger value="table">Таблица</TabsTrigger>
							<TabsTrigger value="list">Список</TabsTrigger>
						</TabsList>

						<TabsContent value="table">
							<QuestionsDataTable questions={filteredQuestions} />
						</TabsContent>

						<TabsContent value="list">
							<QuestionsList
								questions={filteredQuestions}
								onQuestionClick={handleClick}
							/>
						</TabsContent>
					</Tabs>
				) : (
					<QuestionsList
						questions={filteredQuestions}
						onQuestionClick={handleClick}
					/>
				)}

				{filteredQuestions.length === 0 && (
					<div className="mt-16 text-center text-muted-foreground">
						Ничего не найдено по выбранным фильтрам
						<br />
						<Button variant="link" onClick={resetFilters} className="mt-2">
							Сбросить фильтры
						</Button>
					</div>
				)}
			</div>
		</div>
	);
}
