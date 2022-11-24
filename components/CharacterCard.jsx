import { useRouter } from 'next/router';

const CharacterCard = ({ character }) => {
  const router = useRouter();
  const planet = character.homeworld.substring(30).replace('/', '');
  return (
    <div className='block rounded-lg shadow-lg bg-white w-96'>
      <div className='py-3 px-6 border-b border-gray-300 text-center font-bold'>
        {character.name}
      </div>
      <div className='p-6'>
        <ul>
          <li>Height: {character.height}</li>
          <li>Mass: {character.mass}</li>
          <li>Hair Color: {character.hair_color}</li>
          <li>Skin Color: {character.skin_color}</li>
          <li>Birth Year: {character.birth_year}</li>
          <li>Gender: {character.gender}</li>
        </ul>
      </div>
      <div className='py-3 px-6 border-t border-gray-300 text-center'>
        <button
          onClick={() => router.push(`/planet/${planet}`)}
          type='button'
          className=' inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
        >
          Go to Planet
        </button>
      </div>
    </div>
  );
};

export default CharacterCard;
