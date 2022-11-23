import { useEffect, useState } from 'react';

const Home = ({ people, hasNext, hasPrevious, error }) => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState(people);
  const [next, setNext] = useState(hasNext);
  const [previous, setPrevious] = useState(hasPrevious);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DB_URL}people/?page=${page}`
      );
      const data = await response.json();
      setCharacters(data.results);
      setNext(data.next);
      setPrevious(data.previous);
    })();
  }, [page]);

  if (error) {
    return <div> No hay datos</div>;
  }
  return (
    <div className='flex items-center flex-col'>
      <div>
        {characters.map((character) => {
          return <div key={character.name}>{character.name}</div>;
        })}
      </div>
      <div className='flex'>
        <button
          onClick={() => setPage((prev) => prev - 1)}
          disabled={previous === null}
        >
          -
        </button>
        <p>{page}</p>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={next === null}
        >
          +
        </button>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const BASE_URL = process.env.NEXT_DB_URL;
  try {
    const response = await fetch(`${BASE_URL}people/?page=1`);
    const data = await response.json();
    return {
      props: {
        people: data.results,
        hasNext: data.next,
        hasPrevious: data.previous,
      },
    };
  } catch (error) {
    return {
      props: {
        error: error.message,
      },
    };
  }
}

export default Home;
