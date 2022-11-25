import { useRouter } from 'next/router';

const Card = ({ children, title, footer, planet }) => {
  const router = useRouter();

  return (
    <div className='block rounded-lg shadow-lg bg-white w-96 mb-3'>
      <div className='py-3 px-6 border-b border-gray-300 text-center font-bold'>
        {title}
      </div>
      <div className='p-6'>{children}</div>
      <div className='py-3 px-6 border-t border-gray-300 text-center'>
        {footer ? (
          footer
        ) : (
          <button
            onClick={() =>
              router.push(`/planet/${planet}?charId=${router.query.id}`)
            }
            type='button'
            className=' inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
          >
            Go to Planet
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
