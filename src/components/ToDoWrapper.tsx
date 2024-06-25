const ToDoWrapper = () => {
  return (
    <div className='flex flex-col gap-8 z-50 w-full max-w-3xl h-fit bg-black/30 p-16 backdrop-blur-sm rounded-lg'>
      <div className='relative flex'>
        <h1 className='text-3xl sm:text-5xl text-pink-200 font-bold mx-auto'>
          Your Tasks
        </h1>
      </div>
    </div>
  );
};

export default ToDoWrapper;
