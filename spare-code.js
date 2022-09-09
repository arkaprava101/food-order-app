import React, { useState } from 'react';
import styles from './App.module.scss';
import Navbar from './Components/Navigation/Navbar';
import Card from './Components/Helper/Card';
import HeroSection from './Components/Hero/HeroSection';
import Menu from './Components/Menu/Menu';
const App = () => {
  const [orders, setOrders] = useState([]);
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
  console.log(orders);
  const orderHandler = data => {
    // console.log(data);
    setOrders(prevOrdrs => {
      if (prevOrdrs.length > 0) {
        const previouslyPlacedOrder = prevOrdrs.find(
          el => el.orderItem === data.orderItem
        );
        if (previouslyPlacedOrder) {
          const modifiedOrders = prevOrdrs.filter(el => {
            if (el.orderItem === data.orderItem) {
              console.log('before changing the order amount ' + el.orderAmount);
              el.orderAmount += data.orderAmount;
              console.log('After changing the order amount ' + el.orderAmount);

              /* console.log(
                ` total order amount for the repeated order : ${(el.orderAmount +=
                  data.orderAmount)}`
              ); */
            }
            return el;
          });
          console.log('modified orders list');
          console.log(modifiedOrders);
          return modifiedOrders;
        }
      }

      return [data, ...prevOrdrs];
    });
  };
  return (
    <div className={styles.app}>
      <div className={styles.background}></div>
      <Card>
        <Navbar />
        <HeroSection />
        <Menu onOrder={orderHandler} menuData={DUMMY__DATA} />
        {}
      </Card>
    </div>
  );
};

export default App;
/* const checkPreviousOrder = prevOrdrs.find(
          el => el.orderDetails === data.orderDetails
        );
        if (checkPreviousOrder) {
          checkPreviousOrder.orderAmount += data.orderAmount;
          return prevOrdrs.map(el => {
            if (el.orderDetails === checkPreviousOrder.orderDetails)
              return checkPreviousOrder;
            else return el;
          });
        } */
