import React, { useEffect, useState } from 'react'
import '../styles/payment.css'
import { Link, useNavigate } from 'react-router-dom'
import { UsingStateValue } from './StateContext'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'
import {CardElement, PaymentElement, useElements, useStripe} from '@stripe/react-stripe-js';
import axios from '../services/axios'


// import PaymentForm from './PaymentForm'
function Payment() {
  const navigate = useNavigate();
  const [ClientSecret, setsecrete] = useState(true) 
  const elements = useElements();
  const stripe = useStripe();
    const [{ basket, user}, dispatch ] = UsingStateValue();
    const priceCalculate = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0)  
  
    const [error, setErorr] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const [succeded, setSucceded] = useState(false);
    const [proccesing, setProcessing] = useState('');

    const handleChange = (e) => {
setDisabled(e.empty);
setErorr(e.error ? e.error.message : '');
    } 



    const handleSubmit = async (e) => {
e.preventDefault()
setProcessing(false)
const payLoad = await stripe.confirmCardPayment(ClientSecret, {
  payment_method: {
    card: elements.getElement(CardElement)
  }
}).then(({ paymentIntent }) => {
  setSucceded(true);
  setProcessing(false);
  setErorr(null);
 navigate('/orders');
})
    } 




    useEffect(() => {
      const getClientSecrete = async ()=> {
       const response = await axios({
        method: 'post',
        url: `payments/create?total=${priceCalculate(basket) * 100}`
       })
       setsecrete(response.data.ClientSecret);
      }
      getClientSecrete();
    }, [basket])   

    console.log('THE CLIENT SECRETE IS >>>', ClientSecret)

  return (
    <div className='payment'>
     <div className='checkout-head' >
        <h1>checkout ({<Link to='/checkout'>{basket.length} items</Link>})</h1>
        <div className='payment-detail'>
             <h3>delivery address</h3>
            <div className='delivery-add'>
              
            <p>{user?.email}</p>
            <p>123 React Rd.</p>
            <p>Maryland, U.S</p>
            </div>
           
        </div>


        <div className='payment-detail'>
            <h3>review items and delivery</h3>
            <div className='product-basket'>
            {basket?.map((item) => (
      <CheckoutProduct
        key={item.id}
        id={item.id}
        image={item.image}
        price={item.price}
        rating={item.rating}
        text={item.text}
      />
    ))}
            </div>
        </div>
        <div className='payment-detail'>
            <h3>payment method</h3>
        
        <form  onSubmitt={handleSubmit}className='payment-proc'>
          <CardElement onChange={handleChange}/>
        <CurrencyFormat 
         renderText={(value) => ( 
         <>
            <h4>order now: { value}</h4>
            </>
            )
           
           
          }
         
            decimalScale={2}
            value={priceCalculate(basket)}
            displayType={'text'}
            prefix={'$'}
            thousandSeparator={true}
        />
              <button disabled={disabled || proccesing || succeded}>
                {proccesing ? <p>processing</p> : "buy now"}</button>
                <div>{error}</div>
        </form>
        </div>
     </div>
    </div>
  )
}

export default Payment