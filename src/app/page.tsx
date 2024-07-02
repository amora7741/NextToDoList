import ToDoWrapper from '@/components/ToDoWrapper';
import { BackgroundGradientAnimation } from '@/components/ui/gradient';

export default function Home() {
  return (
    <BackgroundGradientAnimation>
      <main className='absolute flex justify-center md:my-16 w-full max-h-screen overflow-auto'>
        <ToDoWrapper />
      </main>
    </BackgroundGradientAnimation>
  );
}
