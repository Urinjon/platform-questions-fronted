import type { TaskEntity } from "@modules/tasks/Task.entity";
import { Button } from "@ui-kit/ui/button";
import { Calendar } from "@ui-kit/ui/calendar";

import {
	Item,
	ItemActions,
	ItemContent,
	ItemDescription,
	ItemTitle,
} from "@ui-kit/ui/item";
import { Popover, PopoverContent, PopoverTrigger } from "@ui-kit/ui/popover";
import { Space } from "@ui-kit/ui/space";
import { CalendarIcon, CheckIcon, InfoIcon, XIcon } from "lucide-react";
import React from "react";

interface Props {
	task: TaskEntity;
}

export const TaskItem: React.FC<Props> = ({ task }) => {
	const [date, setDate] = React.useState<Date | undefined>(new Date());

	return (
		<Item variant="muted">
			<ItemContent>
				<ItemTitle>{task.title}</ItemTitle>
				<ItemDescription>Краткое описание</ItemDescription>
			</ItemContent>
			<ItemActions>
				<Popover>
					<PopoverTrigger asChild>
						<Button variant="outline">
							<CalendarIcon />
						</Button>
					</PopoverTrigger>
					<PopoverContent>
						<Calendar mode="single" selected={date} onSelect={setDate} />
					</PopoverContent>
				</Popover>
				<Button variant="outline" size="sm">
					<InfoIcon />
				</Button>
				<Space gap={3}>
					<Button variant="success">
						<CheckIcon />
					</Button>
					<Button variant="danger">
						<XIcon />
					</Button>
				</Space>
			</ItemActions>
		</Item>
	);
};
