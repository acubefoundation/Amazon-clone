import React from 'react'
import '../styles/subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { UsingStateValue } from './StateContext';
import { Link } from 'react-router-dom';



function Subtotal() {
    const [{ basket }, dispatch ] = UsingStateValue();
   const priceCalculate = (basket) => 
      basket?.reduce((amount, item) => item.price + amount, 0)  
    

  return (
    <div>
        <CurrencyFormat
         renderText={(value) => ( 
         <>
            <p>subtotal ( {basket.length} items): <strong>{ value}</strong></p>
                <small className='checkBox'><input type='checkbox'/>this order contains a gift</small>
            </>
            )
           
           
          }
         
            decimalScale={2}
            value={priceCalculate(basket)}
            displayType={'text'}
            prefix={'$'}
            thousandSeparator={true}

               
       />
       <Link to='/payment'> 
       <button className='order-button'>proceed to checkout</button>
       </Link>
       
    </div>
  )
}

export default Subtotal

