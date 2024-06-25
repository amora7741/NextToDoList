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

const formSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'You must have a title.' })
    .max(50, { message: 'Your title must be less than 50 characters.' }),
  description: z
    .string()
    .max(50, { message: 'Your title must be less than 50 characters.' }),
});

const ToDoDialog = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

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
            <Button className='bg-black/50 hover:bg-black/30 self-end'>
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ToDoDialog;
