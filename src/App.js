import React, { useState, useReducer } from 'react';
import ReactDOM from 'react-dom';
import styles from './App.module.scss';
import Navbar from './Components/Navigation/Navbar';
import Card from './Components/Helper/Card';
import HeroSection from './Components/Hero/HeroSection';
import Menu from './Components/Menu/Menu';
import Overlay from './Components/Overlay/Overlay';
import ViewCart from './Components/Cart/ViewCart';

const orderReducer = (previousCartDetails, action) => {
  if (action.type === 'NEW__ORDER') {
    const matchedItem = previousCartDetails.find(
      el => el.orderItem === action.data.orderItem
    );
    if (matchedItem) {
      return previousCartDetails.map(el => {
        if (el.orderItem === action.data.orderItem) {
          console.log('previous order amount : ' + el.orderAmount);
          el.orderAmount = el.orderAmount + action.data.orderAmount;
          console.log('after adding order amount : ' + el.orderAmount);
        }
        console.log(el);
        return el;
      });
    }
    return [...previousCartDetails, action.data];
  }
  if (action.type === 'ORDER__ADD') {
    return previousCartDetails.filter(el => {
      if (el.orderItem === action.data.orderItem) el.orderAmount++;
      return el;
    });
  }
  if (action.type === 'ORDER__REMOVE') {
    return previousCartDetails.filter(el => {
      if (el.orderItem === action.data.orderItem) {
        if (el.orderAmount > 1) el.orderAmount--;
        else return;
      }
      return el;
    });
  }
};
const App = () => {
  const DUMMY__DATA = [
    {
      id: '01',
      dishName: 'Aloo posto dal bhaat',
      dishDetails: 'Indian cuisine at its finest',
      amount: '10.99',
    },
    {
      id: '02',
      dishName: 'Sushi',
      dishDetails: 'Finest fish and veggies',
      amount: '22.99',
    },
    {
      id: '03',
      dishName: 'Schnitzel',
      dishDetails: 'A german speciality',
      amount: '38.25',
    },
    {
      id: '04',
      dishName: 'Barbecue burger',
      dishDetails: 'Amrican style , raw , meaty',
      amount: '15.20',
    },
    {
      id: '05',
      dishName: 'green bowl',
      dishDetails: 'Healthy...and green...',
      amount: '18.99',
    },
  ];
  const [showCart, setShowCart] = useState(false);
  const [orders, dispatchOrders] = useReducer(orderReducer, []);
  const cartVisibilityHandler = () => {
    setShowCart(prevVal => !prevVal);
  };
  const orderHandler = (data, action) => {
    if (action === 'NEW__ORDER') dispatchOrders({ type: action, data: data });
    if (action === 'ORDER__REMOVE')
      dispatchOrders({ type: action, data: data });
    if (action === 'ORDER__ADD') dispatchOrders({ type: action, data: data });
  };
  console.log(orders);

  return (
    <div className={styles.app}>
      <div className={styles.background}></div>
      <Card>
        <Navbar onCartClick={cartVisibilityHandler} totalOrders={orders} />
        <HeroSection />
        <Menu onOrder={orderHandler} menuData={DUMMY__DATA} />
        {showCart &&
          ReactDOM.createPortal(
            <Overlay onCartClick={cartVisibilityHandler}>
              <ViewCart
                onOrderChange={orderHandler}
                onCartClick={cartVisibilityHandler}
                totalOrders={orders}
              />
            </Overlay>,
            document.getElementById('overlay-root')
          )}
      </Card>
    </div>
  );
};

export default App;
