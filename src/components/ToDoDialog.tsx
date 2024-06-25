import { Button } from './ui/button';
import { IoIosAdd } from 'react-icons/io';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

const ToDoDialog = () => {
  return (
    <Dialog>
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
          <div className='grid w-full items-center gap-2 pt-8'>
            <Label htmlFor='taskname'>Task Title</Label>
            <Input
              type='text'
              id='taskname'
              placeholder='Task'
              className='bg-black/20 border-none w-full'
            />
          </div>
          <div className='grid w-full items-center gap-2 pt-4'>
            <Label htmlFor='taskname'>Task Description</Label>
            <Textarea
              id='taskname'
              placeholder='Description'
              className='bg-black/20 border-none w-full resize-none'
            />
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ToDoDialog;
