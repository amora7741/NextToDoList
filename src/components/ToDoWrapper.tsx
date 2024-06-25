'use client';

import { useState } from 'react';
import ToDoDialog from './ToDoDialog';

type Todo = {
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

  const deleteTask = (task: Todo) => {
    const newTasks = tasks.filter((t) => t.id != task.id);
    setTasks(newTasks);
  };

  return (
    <div className='flex flex-col gap-8 z-50 w-full max-w-3xl h-fit bg-black/30 p-4 sm:p-16 backdrop-blur-sm rounded-lg'>
      <div className='relative flex flex-col gap-4 sm:flex-row items-center text-center'>
        <h1 className='text-4xl sm:text-5xl text-pink-200 font-bold mx-auto'>
          Your Tasks
        </h1>
        <ToDoDialog />
      </div>
    </div>
  );
};

export default ToDoWrapper;
