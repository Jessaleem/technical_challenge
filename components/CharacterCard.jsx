import { useRouter } from 'next/router';
import Card from './Card';
import Link from 'next/link';

const CharacterCard = ({ character }) => {
  const router = useRouter();
  const planet = character.homeworld.substring(30).replace('/', '');

  return (
    <>
      <Card title={character.name} planet={planet}>
        <ul>
          <li>Height: {character.height}</li>
          <li>Mass: {character.mass}</li>
          <li>Hair Color: {character.hair_color}</li>
          <li>Skin Color: {character.skin_color}</li>
          <li>Birth Year: {character.birth_year}</li>
          <li>Gender: {character.gender}</li>
        </ul>
      </Card>
      <Card title='Filmes' footer='Star Wars Episodes'>
        <ul className='border py-3 px-2 rounded-lg'>
          {character.films.map((film, index) => {
            const filmId = film.substring(28).replace('/', '');
            return (
              <li className='mb-4 border-b' key={film}>
                <Link href={`/film/${filmId}`}>
                  <a>Film {index + 1}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </Card>
    </>
  );
};

export default CharacterCard;
