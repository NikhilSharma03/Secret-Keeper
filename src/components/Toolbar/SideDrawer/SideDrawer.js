import React from 'react';
import styles from './SideDrawer.module.css';
import NavigationItems from './../NavigationItems/NavigationItems';

const SideDrawer = (props) => {
  return (
    <div
      className={styles.SideDrawer}
      style={{
        transition: 'all .4s',
        transform: props.show ? 'translateX(0)' : 'translateX(-100%)',
      }}
    >
      <div className={styles.Main}>
        <label className={styles.MainFirst}>Secret</label>
        <label className={styles.MainLast}>Keeper</label>
      </div>

      <div className={styles.Navigation}>
        <NavigationItems type='block' margin={true} />
      </div>
    </div>
  );
};

export default SideDrawer;
