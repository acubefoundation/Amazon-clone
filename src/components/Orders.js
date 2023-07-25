import React, { useEffect, useState } from 'react'
import '../styles/orders.css'
import { db } from './firebaseConfig'
import { useStateValue } from './StateContext'
import Order from './Order';
function Orders() {
    const [{basket, user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);
    useEffect(() => {if (user) {
        db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot((snapshot) => setOrders(
            snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                })
                
            )
        ))
    }else {
        setOrders([]);
    }}, [user]);
    
    
  return (
    <div className='orders'>
        <h1>your orders</h1>
        <div className='orders_order'>
        {orders?.map((order) => (
    <Order order={order} />
))}
        </div>
    </div>
  )
}

export default Orders