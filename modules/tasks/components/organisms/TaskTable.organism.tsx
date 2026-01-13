"use client";

import { Card } from "@ui-kit/ui/card";
import { TasksList } from "../molecules/TasksList.molecule";
import { Title } from "@ui-kit/ui/Title";
import { Space } from "@ui-kit/ui/space";
import { Grid } from "@ui-kit/ui/grid";

export const TaskTable = () => {
	const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

	return (
		<Card>
			<Grid isWrap col={days.length - 1} row={1}>
				{days.map((day) => (
					<Space key={day} gap={3} axios="col">
						<Title>{day}</Title>
						<TasksList key={day} />
					</Space>
				))}
			</Grid>
		</Card>
	);
};
