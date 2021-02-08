import React from 'react';
import styles from './Home.module.css';

const Home = (props) => {
  const onRead = () => {
    props.history.push('/read');
  };

  const onPost = () => {
    props.history.push('/post');
  };

  return (
    <React.Fragment>
      <div className={styles.Home}>
        <h2 className={styles.Top}>
          Post Your <label>Secret</label>
        </h2>
        <h1 className={styles.Bottom}>
          Annoymo<label>usly</label>
        </h1>
        <button
          onClick={onRead}
          className={[styles.Button, styles.First].join(' ')}
        >
          Read
        </button>
        <button
          onClick={onPost}
          className={[styles.Button, styles.Last].join(' ')}
        >
          Post
        </button>
      </div>
    </React.Fragment>
  );
};

export default Home;
