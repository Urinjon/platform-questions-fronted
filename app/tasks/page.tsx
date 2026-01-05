
import { TaskTable } from '@modules/tasks';

export default function TasksPage() {
  return (
    <section>
      <h2 className='font-bold text-2xl'>Ваши задачи</h2>
      <TaskTable />
      
    </section>
  )
}
