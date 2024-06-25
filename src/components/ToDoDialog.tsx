import { Button } from './ui/button';
import { IoIosAdd } from 'react-icons/io';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

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
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ToDoDialog;
