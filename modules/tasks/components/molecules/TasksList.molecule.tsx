"use client";
import { observer } from "mobx-react-lite";
import { useMemo, useEffect } from "react";

import { Spinner } from "@ui-kit/ui/spinner";
import { Alert } from "@ui-kit/ui/alert";
import { Card } from "@ui-kit/ui/card";
import { TaskItem } from "../atoms/TaskItem.client.atom";
import { createTasksStore } from "@modules/tasks/tasks.container";

export const TasksList = observer(() => {
	const tasksStore = useMemo(() => createTasksStore(), []);

	useEffect(() => {
		tasksStore.load();
	}, [tasksStore]);

	if (tasksStore.isLoading) return <Spinner />;
	if (tasksStore.error) return <Alert>{tasksStore.error}</Alert>;

	return (
		<Card className="grid grid-cols-1 gap-4 p-4">
			{tasksStore.tasks.map((task) => (
				<TaskItem key={task.id} task={task} />
			))}
		</Card>
	);
});
