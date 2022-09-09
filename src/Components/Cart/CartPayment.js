import React from 'react';
import styles from './CartPayment.module.scss';
const CartPayment = props => {
  const orderHandler = () => {
    if (props.totalBill !== 0) console.log('Ordering...');
  };
  return (
    <div className={styles['payment-details']}>
      <h3 className={styles['payment-details__heading']}>total amount</h3>
      <div className={styles['payment-details__price']}>
        ${props.totalBill.toFixed(2)}
      </div>
      <div className={styles['payment-details__btns']}>
        <button onClick={props.onCartClick}>close</button>
        <button onClick={orderHandler}>order</button>
      </div>
    </div>
  );
};
export default CartPayment;
