import React from 'react';
import styles from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';

const NavigationItems = (props) => (
  <li className={styles.List}>
    <NavLink
      to={props.href}
      activeStyle={{ color: '#b7854a', transition: 'all .4s' }}
      exact={props.exact}
    >
      {props.label}
    </NavLink>
  </li>
);

export default NavigationItems;
