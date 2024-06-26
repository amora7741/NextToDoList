'use client';

import { useState } from 'react';
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

  const deleteTask = (task: Todo) => {
    const newTasks = tasks.filter((t) => t.id != task.id);
    setTasks(newTasks);
  };

  return (
    <div className='flex flex-col gap-16 z-50 w-full max-w-3xl h-fit bg-black/30 p-2 sm:p-16 backdrop-blur-sm rounded-lg'>
      <div className='relative flex flex-col gap-4 sm:flex-row items-center text-center'>
        <h1 className='text-4xl sm:text-5xl text-pink-200 font-bold mx-auto'>
          Your Tasks
        </h1>
        <ToDoDialog addTask={addTask} />
      </div>
      {tasks.length > 0 && (
        <ul className='space-y-4'>
          {tasks.map((task) => (
            <ToDoItem task={task} key={task.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToDoWrapper;
