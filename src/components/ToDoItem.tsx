import { Todo } from './ToDoWrapper';
import { Button } from './ui/button';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';

const ToDoItem = ({
  task,
  deleteTask,
}: {
  task: Todo;
  deleteTask: () => void;
}) => {
  return (
    <li className='bg-black/40 p-4 rounded-md flex flex-col space-y-4 justify-between'>
      <p className='text-white font-semibold text-3xl'>{task.title}</p>
      <div className='flex space-x-2 ml-auto'>
        <Button className='bg-black/50 hover:bg-black/30'>
          <FaCheck className='fill-green-500 w-5 h-auto' />
        </Button>
        <Button className='bg-black/50 hover:bg-black/30' onClick={deleteTask}>
          <RiDeleteBin6Fill className='fill-red-600 w-5 h-auto' />
        </Button>
      </div>
    </li>
  );
};

export default ToDoItem;
