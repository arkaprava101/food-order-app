import React from 'react';
import styles from './HeroSection.module.scss';

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <h2 className={styles['hero__heading']}>
        Delicious food delivered to your doorstep !
      </h2>
      <p className={styles['hero__para']}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip{' '}
      </p>
    </div>
  );
};

export default HeroSection;
