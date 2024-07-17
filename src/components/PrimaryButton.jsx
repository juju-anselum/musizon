import { forwardRef } from 'react';

const PrimaryButton = forwardRef(({ text, onClick }, ref) => {
  return (
    <div
      className='bg-tertiaryColor rounded-md px-4 py-3 text-black text-center text-md font-medium transition-all duration-150 hover:brightness-75 cursor-pointer select-none'
      onClick={onClick}
      ref={ref}
    >
      {text}
    </div>
  )
});

PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;
