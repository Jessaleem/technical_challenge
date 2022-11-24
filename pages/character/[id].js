import CharacterCard from '../../components/CharacterCard';

const CharacterDetail = ({ character, error }) => {
  if (error) return <p>Character not found!</p>;

  return (
    <section className='flex justify-between max-w-5xl mx-auto p-16'>
      <CharacterCard character={character} />
    </section>
  );
};
export default CharacterDetail;

export async function getServerSideProps(context) {
  const BASE_URL = process.env.SWAPI_URL;
  const id = context.params.id;
  let character;
  let error = null;
  try {
    const response = await fetch(`${BASE_URL}people/${id}`);
    const data = await response.json();
    character = data;
  } catch (error) {
    error = error.message;
  }

  return { props: { character, error } };
}
