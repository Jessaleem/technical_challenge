import Image from 'next/image';

const Character = ({ name }) => {
  return (
    <button class='flex justify-center m-2'>
      <div class='block p-6 rounded-lg shadow-lg bg-white max-w-sm w-96'>
        <p class='text-gray-900 text-xl leading-tight font-medium mb-2'>
          {name}
        </p>
      </div>
    </button>
  );
};

export default Character;
