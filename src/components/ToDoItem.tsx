import { Todo } from './ToDoWrapper';

const ToDoItem = ({ task }: { task: Todo }) => {
  return (
    <li className='bg-black/40 p-2 rounded-md'>
      <p className='text-white font-semibold text-3xl'>{task.title}</p>
    </li>
  );
};

export default ToDoItem;
