type HeaderProps = {
  name: string;
  position: string;
};

function Header({ name, position }: HeaderProps) {
  return (
    <div className='md:sticky top-0 start-0 z-10 w-full h-[5rem] md:bg-yellow-400 p-5 sm:pis-8 flex border-b-[2px] md:border-black md:shadow-sm font-bold text-2xl'>
      <div className='flex flex-col'>
        <span>{name}</span>
        <span className='font-normal text-base'>{position}</span>
      </div>
    </div>
  );
}

export default Header;
