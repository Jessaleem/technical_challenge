import { useRouter } from 'next/router';

const Character = ({ name, url }) => {
  const router = useRouter();
  const id = url.substring(29).replace('/', '');

  return (
    <button
      onClick={() => router.push(`/character/${id}`)}
      className='flex justify-center m-2'
    >
      <div className='block p-6 rounded-lg shadow-lg bg-white max-w-sm w-96'>
        <p className='text-gray-900 text-xl leading-tight font-medium mb-2'>
          {name}
        </p>
      </div>
    </button>
  );
};

export default Character;
