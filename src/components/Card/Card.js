import React from 'react';
import styles from './Card.module.css';

const Card = (props) => (
  <div className={styles.Main}>
    <h1>{props.title}</h1>
    <label>{props.time}</label>
  </div>
);

export default Card;
