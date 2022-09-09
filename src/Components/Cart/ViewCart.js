import React from 'react';
import styles from './ViewCart.module.scss';
import CartItems from './CartItems';
import CartPayment from './CartPayment';

const ViewCart = props => {
  return (
    <ul className={styles['cart-orders']}>
      {props.totalOrders.length === 0 && (
        <div className={styles['no-item']}>No item (っ °Д °;)っ</div>
      )}
      {props.totalOrders.length > 0 &&
        props.totalOrders.map(el => (
          <CartItems
            key={el.orderItem}
            dishName={el.orderName}
            dishPrice={el.orderPrice}
            dishAmount={el.orderAmount}
            onOrderChange={props.onOrderChange}
            id={el.orderItem}
          />
        ))}
      <CartPayment
        totalBill={props.totalOrders
          .map(el => +el.orderPrice * +el.orderAmount)
          .reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            0
          )}
        onCartClick={props.onCartClick}
      />
    </ul>
  );
};
export default ViewCart;
