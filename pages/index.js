import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      </main>
    </div>
  );
}
