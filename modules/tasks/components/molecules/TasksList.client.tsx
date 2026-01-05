'use client';

import { tasksStore } from '@modules/tasks/tasks.container';
import { Alert } from '@shared/ui/alert';
import { Spinner } from '@shared/ui/spinner';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { TaskItem } from '../atoms/TaskItem.client';
import { Card } from '@shared/ui/card';


export const TasksList = observer(() => {
  useEffect(() => {
    tasksStore.load();
  }, []);

  if (tasksStore.isLoading) return <Spinner />;
  if (tasksStore.error) return <Alert>{tasksStore.error}</Alert>;

  return (
    <Card className='grid grid-cols-1 gap-4 p-4'>
      {tasksStore.tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </Card>
  );
});