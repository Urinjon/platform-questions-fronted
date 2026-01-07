import { Card } from "@shared/ui/card"
import { TasksList } from "../molecules/TasksList.client"
import { Title } from "@shared/ui/Title"
import { Space } from "@shared/ui/space"
import { Grid } from "@shared/ui/grid"


export const TaskTable: React.FC = () => {

    const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    return (
            <Card> 
                <Grid
                    isWrap
                    col={days.length - 1}
                    row={1}
                >
                    
                        {days.map(day => (
                            <Space key={day} gap={3} axios="col">
                                <Title>{day}</Title>
                                <TasksList key={day} />
                            </Space>
                        ))}
                    
                </Grid>
            </Card>

    )
}