import { useEffect, useState, useMemo } from 'react';
import Spinner from '../components/Spinner';
import Character from '../components/Character';
import { useSelector } from 'react-redux';

const Home = ({ people, hasNext, hasPrevious, error }) => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState(people);
  const [next, setNext] = useState(hasNext);
  const [previous, setPrevious] = useState(hasPrevious);
  const [isloading, setIsloading] = useState(false);
  const [readError, setReadError] = useState(error);
  const value = useSelector((state) => state.filter.value);

  useEffect(() => {
    (async () => {
      try {
        setIsloading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SWAPI_URL}people/?page=${page}`
        );
        const data = await response.json();
        setCharacters(data.results);
        setNext(data.next);
        setPrevious(data.previous);
      } catch (error) {
        setReadError(error.message);
      } finally {
        setIsloading(false);
      }
    })();
  }, [page]);

  const filtered = useMemo(() => {
    return characters.filter((character) => {
      return character.name.toLowerCase().includes(value.toLowerCase());
    });
  }, [value, characters]);

  if (readError) {
    return <div> No hay datos</div>;
  }
  if (isloading) return <Spinner />;

  return (
    <div className='flex items-center flex-col py-6 mb-14'>
      <div className='flex justify-around mx-auto flex-wrap max-w-5xl'>
        {filtered.map((character) => {
          return (
            <Character
              key={character.name}
              name={character.name}
              url={character.url}
            />
          );
        })}
      </div>
      <div className='flex justify-between bg-slate-200 rounded-xl p-4 mt-6'>
        <button
          className=' flex justify-center items-center bg-white rounded-lg font-bold text-lg w-10 border border-slate-600'
          onClick={() => setPage((prev) => prev - 1)}
          disabled={previous === null}
        >
          -
        </button>
        <p className='font-bold p-2 mx-2'>{page}</p>
        <button
          className='flex justify-center items-center w-10 bg-white rounded-lg font-bold text-lg border border-slate-600'
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
  const BASE_URL = process.env.SWAPI_URL;
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
