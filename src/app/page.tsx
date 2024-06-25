import ToDoWrapper from '@/components/ToDoWrapper';
import { BackgroundGradientAnimation } from '@/components/ui/gradient';

export default function Home() {
  return (
    <BackgroundGradientAnimation>
      <main className='absolute flex justify-center my-16 w-full min-h-screen px-4'>
        <ToDoWrapper />
      </main>
    </BackgroundGradientAnimation>
  );
}
