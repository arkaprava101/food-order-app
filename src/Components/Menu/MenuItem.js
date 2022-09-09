import React, { useRef, useState } from 'react';
import styles from './MenuItem.module.scss';

const MenuItem = props => {
  const amountInputRef = useRef();
  const [inputVal, setInputVal] = useState(0);
  const submitForm = e => {
    e.preventDefault();
    if (+amountInputRef.current.value > 0) {
      props.onOrder(
        {
          orderAmount: +amountInputRef.current.value,
          orderItem: props.id,
          orderName: props.dish,
          orderPrice: +props.amount,
        },
        'NEW__ORDER'
      );
    } else return;
    // in case to reset the form input value to 0
    // setInputVal(0);
  };
  const inputChangeHandler = e => {
    setInputVal(e.target.value);
  };
  return (
    <li className={styles['lists__item']}>
      <div>
        <h3 className={styles['lists__item--name']}>{props.dish}</h3>
        <p className={styles['lists__item--details']}>{props.dishDetails}</p>
        <h4 className={styles['lists__item--price']}>${props.amount}</h4>
      </div>
      <div>
        <form onSubmit={submitForm} className={styles['add-item']}>
          <label className={styles['add-item__label']} htmlFor={props.id}>
            Amount
          </label>
          <input
            ref={amountInputRef}
            className={styles['add-item__qt']}
            id={props.id}
            min={1}
            onChange={inputChangeHandler}
            value={inputVal}
            type="number"
          ></input>
          <button className={styles['add-item__btn']} type="submit">
            +Add
          </button>
        </form>
      </div>
    </li>
  );
};
export default MenuItem;
