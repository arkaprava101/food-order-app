import React from 'react';
import styles from './Overlay.module.scss';

const Overlay = props => {
  return (
    <React.Fragment>
      <div onClick={props.onCartClick} className={styles.overlay}></div>
      {props.children}
    </React.Fragment>
  );
};

export default Overlay;
