import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';
import ExperienceBar from '../components/ExperienceBar';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>



        <ExperienceBar />



      <footer>

      </footer>
    </div>
  )
}

export default Home;
