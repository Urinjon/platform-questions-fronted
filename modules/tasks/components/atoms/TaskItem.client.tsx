import { TaskEntity } from "@modules/tasks/Task.entity"
import { Button } from "@shared/ui/button"
import { Calendar } from "@shared/ui/calendar"
import { Card } from "@shared/ui/card"
import { Item, ItemActions, ItemContent, ItemDescription, ItemFooter, ItemHeader, ItemMedia, ItemTitle } from "@shared/ui/item"
import { Popover, PopoverContent, PopoverTrigger } from "@shared/ui/popover"
import { Space } from "@shared/ui/space"
import { CalendarIcon, CheckIcon, InfoIcon, XIcon } from "lucide-react"
import React from "react"

interface Props {
    task: TaskEntity
}

export const TaskItem: React.FC<Props> = ({ task }) => {

    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
      <Item variant="muted">
        <ItemContent>
          <ItemTitle>{task.title}</ItemTitle>
          <ItemDescription>
            Краткое описание
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline"><CalendarIcon /></Button>
            </PopoverTrigger>
            <PopoverContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
              />
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
    )
}