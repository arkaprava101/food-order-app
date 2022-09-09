import React from 'react';
import styles from './CartItems.module.scss';
const CartItems = props => {
  const decreaseOrder = () => {
    props.onOrderChange(
      {
        orderItem: props.id,
      },
      'ORDER__REMOVE'
    );
  };
  const increaseOrder = () => {
    props.onOrderChange(
      {
        orderItem: props.id,
      },
      'ORDER__ADD'
    );
  };
  return (
    <li className={styles['cart-item']}>
      <div className={styles['cart-item__details']}>
        <h3 className={styles['cart-item__name']}>{props.dishName}</h3>
        <h6 className={styles['cart-item__price']}>{props.dishPrice}</h6>
        <div className={styles['cart-item__order-amount']}>
          X {props.dishAmount}
        </div>
      </div>
      <div className={styles['cart-item__btns']}>
        <button onClick={decreaseOrder}>-</button>
        <button onClick={increaseOrder}>+</button>
      </div>
    </li>
  );
};
export default CartItems;
