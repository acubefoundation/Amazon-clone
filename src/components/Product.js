import React from 'react'
import '../styles/product.css'
import productOne from './images/product-1.jpg'
import { UsingStateValue } from './StateContext';


function Product({ id, image, text, price, rating, tittle, formattedPrice }) {
   const [{ basket }, dispatch ] = UsingStateValue();
   console.log(basket)
   const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        text: text,
        image: image,
        price: price,
        rating: rating
      },
    });
   }

  return (
    <div className='Amproduct'>
        <div className='pr-description'>
        <p className='pr-desc'>{text}</p>
        <small className='dollar'>$</small>
        <strong className='pr-price'>{formattedPrice}</strong>
        <div className='pr-rating'>{Array(rating).fill().map(() => <p>⭐️</p>)}</div>
        </div>
        
            <img className='pr-img' src={image} alt={tittle}/>
        
            <button className='button' onClick={addToBasket}>add to basket</button>
        
    </div>
  )
}

export default Product