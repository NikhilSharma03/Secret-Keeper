import React from 'react';
import styles from './Toolbar.module.css';
import NavigationItems from './NavigationItems/NavigationItems';

const Toolbar = (props) => {
  let sideLogo = [styles.SideLogo];
  if (props.show) {
    sideLogo.push(styles.SideLogoClose);
  }

  return (
    <div className={styles.Toolbar}>
      <div className={styles.Main}>
        <label className={styles.MainFirst}>Secret</label>
        <label className={styles.MainLast}>Keeper</label>
      </div>

      <div className={sideLogo.join(' ')} onClick={props.clicked}>
        <div className={styles.FirstDiv}></div>
        <div className={styles.BetweenDiv}></div>
        <div className={styles.LastDiv}></div>
      </div>

      <nav className={styles.Nav}>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default Toolbar;
