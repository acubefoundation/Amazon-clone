import { useEffect } from 'react';
import Header from './components/A_Header';
import CheckOut from './components/CheckOut';
import Orders from './components/Orders';
import HeaderOutlet from './components/HeaderOutlet';
import Home from './components/Home';
import Login from './components/Login';
import { useStateValue } from './components/StateContext';
import './styles/App.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { auth } from './components/firebaseConfig';
import Payment from './components/Payment';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51NW3CWAsrZQjnhHtyCHsJDIo6mtgXc9l1Bzxb6THSSYivEcwksc8JH2CXao2PUMmMVqJ6y6qIz4CsnW5H9KjImSl00HBSw3mKL')
function App() {
  const [{ basket, user}, dispatch ] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
           type: 'ADD_USER',
           user: authUser,
        })
       
      }else {
        dispatch({
          type: 'NO_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path="/" exact element={<HeaderOutlet />} >
        <Route path="/" exact element={<Home />} />  
         <Route path="/payment" exact element={(  <Elements stripe={stripePromise}>
         <Payment />
         </Elements>)
        } /> 
             
             <Route path="/checkout" element={<CheckOut />} /> 
             <Route path="/orders" element={<Orders />} /> 
        </Route>   
        <Route path="/login" exact element={<Login />} />  
        
        
      </Routes>
      </BrowserRouter>
     {/* <Header />
     <Home />
     <CheckOut /> */}
    </div>
  );
}

export default App;