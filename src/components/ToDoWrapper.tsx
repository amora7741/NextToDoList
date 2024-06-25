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

const ToDoWrapper = () => {
  return (
    <div className='flex flex-col gap-8 z-50 w-full max-w-3xl h-fit bg-black/30 p-4 sm:p-16 backdrop-blur-sm rounded-lg'>
      <div className='relative flex flex-col gap-4 sm:flex-row items-center text-center'>
        <h1 className='text-4xl sm:text-5xl text-pink-200 font-bold mx-auto'>
          Your Tasks
        </h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button className='bg-black/50 hover:bg-black/30 sm:absolute right-0'>
              <IoIosAdd className='fill-white w-8 h-auto' />
            </Button>
          </DialogTrigger>
          <DialogContent className='text-white'>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ToDoWrapper;
