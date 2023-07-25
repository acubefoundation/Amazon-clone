//imports
import React from "react";
import "../styles/header.css";
import { Link, useNavigate } from 'react-router-dom'

import logo from './images/amazon_PNG11.png'
import { useStateValue } from "./StateContext";
import { auth } from "./firebaseConfig";

// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


function A_Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const handleAuth = () => {
    if (user) {
      console.log('User:', user);
      try {
        auth.signOut().then(() => {
          console.log('signed out successfully');
          dispatch({ type: 'SIGN_OUT' }); // Dispatch the SIGN_OUT action
        });
      } catch (error) {
        console.log('Sign out error:', error);
      }
    }
  };
  

  return (
    <div className="header">
    
      {/* //the first image */}
      <Link to='/' >
          <img src={logo} alt="amazon logo" className='header-logo-img header-logo' />
     </Link>


{/* the search bar */}
     <div className='header-input'>
        {/* <form className='h-input-form'> */}
          <input type="text" className='h-input-input'></input>
          <svg class="MuiSvgIcon-root header__searchIcon" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
        {/* </form> */}
     </div>





    <div className="theNav">



<Link to={!user && '/login'}>
     <div className='text-first' onClick={handleAuth}>
     <span className='t-span-1'>hello {!user ? 'guest' : user?.email}</span>
     <span className='t-span-2'>{!user ? 'sign in' : 'sign out'}</span>
     </div>
</Link>


<Link to='/'>
     <div className='text-second'>
      
     <span className='t-span-1'>returns</span>
     <span className='t-span-2'>& orders</span>
     
     </div>
</Link>

<Link to='/'>
     <div className='text-third'>
      
     <span  className='t-span-1'>your</span> 
     <span  className='t-span-2'>prime</span>
    
     </div>
</Link>

    <Link to='/checkout'>
     <div className="shopingBasket">
     <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></svg>
      <span className=''>{basket.length}</span>
     </div>
     </Link>

</div>
    </div>
  );
}

export default A_Header;
