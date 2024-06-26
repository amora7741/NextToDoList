import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Todo } from './ToDoWrapper';
import { v4 } from 'uuid';

const formSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'You must have a title.' })
    .max(50, { message: 'Your title must be less than 50 characters.' }),
  description: z
    .string()
    .max(50, { message: 'Your title must be less than 50 characters.' }),
});

const ToDoForm = ({
  addTask,
  closeDialog,
}: {
  addTask: (task: Todo) => void;
  closeDialog: () => void;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const newTask: Todo = {
      ...values,
      id: v4(),
      completed: false,
    };
    addTask(newTask);
    closeDialog();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col space-y-8'
      >
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task Title</FormLabel>
              <FormControl>
                <Input
                  placeholder='Task'
                  className='bg-black/20 border-none w-full'
                  {...field}
                />
              </FormControl>
              <FormMessage className='absolute right-6 text-purple-300' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem className='pb-2'>
              <FormLabel>Task Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Description'
                  className='bg-black/20 border-none w-full resize-none'
                  {...field}
                />
              </FormControl>
              <FormMessage className='absolute right-6 text-purple-300' />
            </FormItem>
          )}
        />
        <Button className='bg-black/50 hover:bg-black/30 self-center w-1/2'>
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default ToDoForm;
