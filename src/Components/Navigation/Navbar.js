import React from 'react';
import styles from './Navbar.module.scss';
import CartDetails from '../Cart/CartDetails';
const Navbar = props => {
  return (
    <nav className={styles.nav}>
      <h4 className={styles['nav-branding']}>React Meals</h4>
      <CartDetails
        onCartClick={props.onCartClick}
        totalOrders={props.totalOrders}
      />
    </nav>
  );
};
export default Navbar;
