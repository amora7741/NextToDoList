import { Todo } from './ToDoWrapper';
import { Button } from './ui/button';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';

const ToDoItem = ({
  task,
  deleteTask,
  completeTask,
}: {
  task: Todo;
  deleteTask: () => void;
  completeTask: () => void;
}) => {
  return (
    <li
      className={`${
        task.completed ? 'bg-black/10' : 'bg-black/40'
      }  p-4 rounded-md flex flex-col space-y-4 justify-between break-words`}
    >
      <div>
        <p
          className={`${
            task.completed ? 'line-through text-white/50' : ''
          }  text-white font-semibold text-3xl`}
        >
          {task.title}
        </p>
        <p
          className={`${
            task.completed ? 'line-through text-white/50' : ''
          } text-xl italic text-white`}
        >
          {task.description}
        </p>
      </div>
      <div className='flex space-x-2 ml-auto'>
        <Button
          className='bg-black/50 hover:bg-black/30'
          onClick={completeTask}
        >
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
