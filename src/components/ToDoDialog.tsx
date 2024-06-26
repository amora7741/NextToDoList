'use client';

import { Button } from './ui/button';
import { IoIosAdd } from 'react-icons/io';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import ToDoForm from './ToDoForm';
import { Todo } from './ToDoWrapper';
import { useState } from 'react';

const ToDoDialog = ({ addTask }: { addTask: (task: Todo) => void }) => {
  const [open, setOpen] = useState(false);

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className='bg-black/50 hover:bg-black/30 sm:absolute right-0'>
          <IoIosAdd className='fill-white w-8 h-auto' />
        </Button>
      </DialogTrigger>
      <DialogContent className='text-white bg-black/20'>
        <DialogHeader>
          <DialogTitle className='text-3xl font-bold'>
            Create your task
          </DialogTitle>
        </DialogHeader>
        <ToDoForm addTask={addTask} closeDialog={closeDialog} />
      </DialogContent>
    </Dialog>
  );
};

export default ToDoDialog;
