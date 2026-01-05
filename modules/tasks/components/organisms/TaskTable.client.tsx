import { Card } from "@shared/ui/card"
import { TasksList } from "../molecules/TasksList.client"
import { Title } from "@shared/ui/Title"
import { Space } from "@shared/ui/space"


export const TaskTable: React.FC = () => {
    return (
        <Card className='grid grid-cols-3 gap-4 p-4'>
            <Space axios="col">
                <Title>Понедельник</Title>
                <TasksList />
            </Space>
            <Space axios="col">
                <Title>Вторник</Title>
                <TasksList />
            </Space>
            <Space axios="col">
                <Title>Среда</Title>
                <TasksList />
            </Space>
        </Card>
    )
}