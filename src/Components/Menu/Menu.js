import React from 'react';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
const Menu = props => {
  return (
    <ul className={styles['lists']}>
      {props.menuData.map(el => (
        <MenuItem
          key={el.id}
          id={el.id}
          dishDetails={el.dishDetails}
          amount={el.amount}
          dish={el.dishName}
          onOrder={props.onOrder}
        />
      ))}
    </ul>
  );
};
export default Menu;
