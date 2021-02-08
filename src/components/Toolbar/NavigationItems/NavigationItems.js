import React from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => (
  <ul
    className={styles.UList}
    style={{
      display: props.type,
      textAlign: 'center',
      marginRight: props.margin ? '0' : null,
    }}
  >
    <NavigationItem label='Home' exact href='/' />
    <NavigationItem label='Read' exact href='/read' />
    <NavigationItem label='Post' exact href='/post' />
  </ul>
);

export default NavigationItems;
