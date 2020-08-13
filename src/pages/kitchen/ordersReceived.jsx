import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import NavKitchen from '../../components/nav/NavKitchen';
import firebase from '../../config/firebase';
import 'firebase/firebase-firestore';
import OrderCard from '../../components/orderKitchen/orderCard';
import './ordersReceived.css';
import Footer from '../../components/footer/footer';

const OrdersReceived = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('orders')
      .get()
      .then((snapshot) => {
        const pedidos = snapshot.docs.map((doc) => {
          if (doc.data().status === 'Em Preparo!') {
            return {
              id: doc.id,
              ...doc.data(),
            };
          }
          return false;
        });
        setOrders(pedidos.filter((pedido) => pedido !== false));
      })
      .catch((error) => {
        Swal.fire({
          text: error,
          icon: 'warning',
        });
      });
  }, []);

  const readyOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
    return firebase
      .firestore()
      .collection('orders')
      .doc(id)
      .update({
        status: 'Pedido Pronto!',
        preparationTime: new Date().toLocaleString('pt-BR'),
        kitchen_time: new Date().getTime(),
      });
  };

  return (
    <>
      <div className="global-kitchen">
        <header className="kitchen">
          <NavKitchen link="/ordersReceived" />
        </header>
        <h1 className="header-kitchen">Pedidos à Preparar</h1>
        <div className="container__card-kitchen">
          <div className="order-card-kitchen">
            <OrderCard
              orders={orders}
              onClick={readyOrder}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrdersReceived;