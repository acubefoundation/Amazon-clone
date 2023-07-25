import React from 'react'
import '../styles/order.css'
import CurrencyFormat from 'react-currency-format'
import CheckoutProduct from './CheckoutProduct'
import moment from 'moment'
import { useStateValue } from './StateContext'
function Order({ order }) {
    const [{basket, user}, dispatch] = useStateValue();
  return (
    <div className='order'>
        <h2>order</h2>
        <p>{moment.unix(order.data.created).format('MMM Do YYYY, h:mma')}</p>
        <p className='order_id'>
            <small>{order.id}</small>
        </p>
       
            {basket?.map((item) => (
      <CheckoutProduct
        key={item.id}
        id={item.id}
        image={item.image}
        price={item.price}
        rating={item.rating}
        text={item.text}
        hideButton
      />
    ))}
          
            <CurrencyFormat 
         renderText={(value) => ( 
         <>
            <h4>Order Total: { value}</h4>
            </>
            )
           
           
          }
         
            decimalScale={2}
            value={order.data.amount / 100}
            displayType={'text'}
            prefix={'$'}
            thousandSeparator={true}
        />
    </div>
  )
}

export default Order