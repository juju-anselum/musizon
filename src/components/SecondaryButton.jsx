import { forwardRef } from 'react';

const SecondaryButton = forwardRef(({ text, icon, onClick }, ref) => {
  return (
    <div 
    className='px-4 py-3 bg-transparent flex items-center justify-center gap-8 border border-neutral-400 rounded-md transition-all duration-150 hover:brightness-75 cursor-pointer select-none'
    onClick={onClick}
    >
      {icon &&
        <img src={icon} alt="Icon" />
      }
      <div
        className=' text-secondaryColorAccent text-center text-md font-normal'
        ref={ref}
      >
        {text}
      </div>
    </div>
  )
});

SecondaryButton.displayName = 'SecondaryButton';

export default SecondaryButton;
