import Card from '../../components/Card';
import { useRouter } from 'next/router';
import Link from 'next/link';

const FilmDetail = ({ planet, error }) => {
  const router = useRouter();

  if (error) return <p>Planet not found!</p>;

  return (
    <section className='flex justify-center items-center max-w-5xl mx-auto p-16'>
      <Card
        title={planet.name}
        footer={<Link href={`/character/${router.query.charId}`}>Go Back</Link>}
      >
        <ul className='mt-4'>
          <li>
            <strong>Surface Water:</strong> {planet.surface_water}{' '}
          </li>
          <li>
            <strong>Rotation Period:</strong> {planet.rotation_period}{' '}
          </li>
          <li>
            <strong>Terrain:</strong> {planet.terrain}{' '}
          </li>
          <li>
            <strong>Population:</strong> {planet.population}{' '}
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
  let planet;
  let error = null;
  try {
    const response = await fetch(`${BASE_URL}planets/${id}`);
    const data = await response.json();
    planet = data;
  } catch (error) {
    error = error.message;
  }

  return { props: { planet, error } };
}
