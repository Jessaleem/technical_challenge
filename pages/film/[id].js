import Card from '../../components/Card';
import { useRouter } from 'next/router';
import Link from 'next/link';

const FilmDetail = ({ film, error }) => {
  const router = useRouter();

  if (error) return <p>film not found!</p>;

  return (
    <section className='flex justify-center items-center max-w-5xl mx-auto p-16'>
      <Card
        title={film.title}
        footer={<Link href={`/character/${router.query.charId}`}>Go Back</Link>}
      >
        <h5 className='font-bold'> Description:</h5>
        <p>{film.opening_crawl}</p>
        <ul className='mt-4'>
          <li>
            <strong>Director:</strong> {film.title}{' '}
          </li>
          <li>
            <strong>Producer:</strong> {film.producer}{' '}
          </li>
          <li>
            <strong>Release Date:</strong> {film.release_date}{' '}
          </li>
          <li>
            <strong>Episode:</strong> {film.episode_id}{' '}
          </li>
        </ul>
      </Card>
    </section>
  );
};
export default FilmDetail;

export async function getServerSideProps(context) {
  const BASE_URL = process.env.SWAPI_URL;
  const id = context.params.id;
  let film;
  let error = null;
  try {
    const response = await fetch(`${BASE_URL}films/${id}`);
    const data = await response.json();
    film = data;
  } catch (error) {
    error = error.message;
  }

  return { props: { film, error } };
}
