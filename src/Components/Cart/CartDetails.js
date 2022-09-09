import React from 'react';
import styles from './CartDetails.module.scss';
import icons from '../../icons/symbol-defs.svg';
const CartDetails = props => {
  return (
    <div onClick={props.onCartClick} className={styles.cart}>
      <svg className={styles['cart__icon']}>
        <use href={`${icons}#icon-cart`}></use>
      </svg>
      <h3 className={styles['cart__heading']}>your cart</h3>
      <div className={styles['cart__details']}>
        {props.totalOrders
          .map(el => el.orderAmount)
          .reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            0
          )}
      </div>
    </div>
  );
};
export default CartDetails;
