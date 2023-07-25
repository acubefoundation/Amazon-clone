import React from "react";
import "../styles/checkout.css";
import checkOut_banner from "./images/checkout-banner.jpg";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateContext";
function CheckOut() {
  const [ {basket}, dispatch] = useStateValue()
  return (
      <div className="checkOut">
        <div className="check-bann_text">
          <img className="order-banner" src={checkOut_banner} alt="banner" />
          <h1>
            hello, <br />
            your shopping basket
          </h1>
          <hr />
          <div>
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
        <div className="check-orders">
          <Subtotal />
        </div>
      </div>
     
    
  );
}

export default CheckOut;
