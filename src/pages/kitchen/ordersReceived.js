import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/button/Button';
import firebase from "../../config/firebase.js";
import "firebase/firebase-auth";
import "firebase/firebase-firestore";

const ordersReceived = () => {
    return (
        <div link='/ordersReceived'>
        <Link to="/ordersReceived">
     Pedidos Recebidos
   </Link>
       <div>Página da Cozinha</div>
       <div>
       <Link to='/'>
        <Button name='SAIR'
          handleClick={() => firebase.auth().signOut()}/>
        </Link>
      </div>
   </div>
    )
}

export default ordersReceived;