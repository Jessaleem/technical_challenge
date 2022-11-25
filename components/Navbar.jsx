import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../slices/filter_slice';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { IconX } from '@tabler/icons';

const Navbar = () => {
  const value = useSelector((state) => state.filter.value);
  const dispatch = useDispatch();
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleChange = (evt) => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <nav className='mx-auto flex max-w-6xl bg-slate-200 rounded-lg justify-between px-4 py-4 mt-4 items-center shadow-2xl'>
      <button
        className='flex justify-center items-center'
        onClick={() => router.push('/')}
      >
        <Image src='/Darth-Vader.png' alt='logo' width={40} height={40} />
        {!show && <span className='ml-4 font-bold text-xl'>SWAPI</span>}
      </button>
      <div className='flex justify-center items-center'>
        <div className={show ? ' xl:w-96 md:block' : 'xl:w-96 hidden md:block'}>
          <div className='input-group relative flex w-full rounded'>
            <input
              value={value}
              onChange={handleChange}
              type='search'
              className='form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mr-1'
              placeholder='Search'
              aria-label='Search'
              aria-describedby='button-addon2'
            />
            <span
              className='input-group-text items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded hidden md:inline-flex'
              id='basic-addon2'
            >
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='search'
                className='w-4'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path
                  fill='currentColor'
                  d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'
                ></path>
              </svg>
            </span>
          </div>
        </div>
        <button className='md:hidden' onClick={() => setShow((prev) => !prev)}>
          {show ? (
            <IconX />
          ) : (
            <span
              className='input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-700 text-center whitespace-nowrap rounded'
              id='basic-addon2'
            >
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='search'
                className='w-4'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path
                  fill='currentColor'
                  d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'
                ></path>
              </svg>
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
