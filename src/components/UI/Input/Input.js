import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
  let element = null;
  let classes = [styles.Field];
  switch (props.elementType) {
    case 'input':
      element = (
        <input
          className={classes.join(' ')}
          value={props.value}
          {...props.elementConfig}
          onChange={props.changed}
        />
      );
      break;
    default:
      element = (
        <input
          className={classes.join(' ')}
          value={props.value}
          {...props.elementConfig}
          onChange={props.changed}
        />
      );
  }

  return <div className={styles.Input}>{element}</div>;
};

export default Input;
