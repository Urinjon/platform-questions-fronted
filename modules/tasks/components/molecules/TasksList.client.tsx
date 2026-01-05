'use client';

import { tasksStore } from '@modules/tasks/tasks.container';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';


export const TasksList = observer(() => {
  useEffect(() => {
    tasksStore.load();
  }, []);

  if (tasksStore.isLoading) return <p>Loading...</p>;
  if (tasksStore.error) return <p>{tasksStore.error}</p>;

  return (
    <ul>
      {tasksStore.tasks.map(task => (
        <li key={task.id}>
          {task.title}
          {task.isExpired && ' ⏰'}
        </li>
      ))}
    </ul>
  );
});