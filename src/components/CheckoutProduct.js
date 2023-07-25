import React from 'react';
import '../styles/checkoutproduct.css';
import { useStateValue } from './StateContext';

function CheckoutProduct({ id, image, price, rating, text, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id
    });
  };

  return (
    <div className='checkoutProduct'>
      <img src={image} alt='product image' />
      <div className='productDisc'>
        <div className='pr-description'>
          <p className='pr-desc'>{text}</p>
          <small className='dollar'>$</small>
          <strong className='pr-price'>{price}</strong>
          <div className='pr-rating'>{Array(rating).fill().map(() => <p>⭐️</p>)}</div>
        </div>
        {!hideButton && (<button className="button" onClick={removeFromBasket}>
          remove from basket
        </button>)}{' '}
        
      </div>
    </div>
  );
}

export default CheckoutProduct;
