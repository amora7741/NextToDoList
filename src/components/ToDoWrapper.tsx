'use client';

import { useEffect, useState } from 'react';
import ToDoDialog from './ToDoDialog';
import ToDoItem from './ToDoItem';

export type Todo = {
  title: string;
  description: string;
  id: string;
  completed: boolean;
};

const ToDoWrapper = () => {
  const [tasks, setTasks] = useState<Todo[]>([]);

  const addTask = (task: Todo) => {
    setTasks((t) => [...t, task]);
  };

  const deleteTask = (taskId: string) => {
    const newTasks = tasks.filter((t) => t.id !== taskId);
    setTasks(newTasks);
  };

  const completeTask = (taskId: string) => {
    const newTasks = tasks.map((t) =>
      t.id === taskId ? { ...t, completed: !t.completed } : t
    );

    setTasks(newTasks);
  };

  return (
    <div className='flex flex-col gap-16 z-50 w-full max-w-3xl h-fit bg-black/30 px-4 py-8 sm:p-10 backdrop-blur-sm rounded-lg'>
      <div className='relative flex flex-col gap-4 sm:flex-row items-center text-center'>
        <h1 className='text-4xl sm:text-5xl text-pink-200 font-bold mx-auto'>
          Your Tasks
        </h1>
        <ToDoDialog addTask={addTask} />
      </div>
      {tasks.length > 0 && (
        <ul className='space-y-4 max-h-[70vh] overflow-auto'>
          {tasks.map((task) => (
            <ToDoItem
              task={task}
              key={task.id}
              deleteTask={() => deleteTask(task.id)}
              completeTask={() => completeTask(task.id)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToDoWrapper;
