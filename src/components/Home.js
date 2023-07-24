import React from 'react';
import '../styles/home.css'
import Product from './Product';


//images
import product_1 from './images/productOne.avif'
import product_2 from './images/productTwo.png'
import product_3 from './images/productThree.png'
import product_4 from './images/productFour.jpeg'
import product_5 from './images/product-1.jpg'
import product_6 from './images/productSix.jpg'

const formatNumber = (number) => {
  const nf = new Intl.NumberFormat("en-US");
  return nf.format(number);
};


function Home() {
 
  const formatPrice = (price) => {
    return formatNumber(price);
  };
  return (
    <div className='home'>
     
        <div>
            <img className='home-banner' src='https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MGY0YzMzNTMt/MGY0YzMzNTMt-NmFmMWY4Y2Mt-w1500._CB644930552_.jpg' />
        </div>
        <div className='home-row'>
        <Product 
        id='242343523'
        image={product_1}
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint  '
        rating = {6}
        tittle='am i right'
        price={467.78} 
        formattedPrice={formatPrice(467.78)}
        />
        <Product 
        id='345346454'
        image={product_2}
        text='laborum
        numquam blanditiis harum quisquam  iusto fuga praesentium
        optio, eaque rerum! '
        rating={3}
        tittle='laborum'
        price={19999.99}
        formattedPrice={formatPrice(19999.99)}
        />
        </div>


        <div className='home-row'>
        <Product 
        id={75873565}
        image={product_3}
        text='Nunc sapien nisl, dignissim at faucibus ut, fringilla at diam. 
        '
        rating={5}
        tittle='Ken Follet'
        price={35768.57}
        formattedPrice={formatPrice(35768.57)}
        />
        <Product 
        id={75398749}
        image={product_4}
        text='Nunc congue dapibus nulla, ut aliquet diam fringilla id. '
        rating={5}
        tittle='laptop'
        price={34.99} 
        formattedPrice={formatPrice(34.99)}
        />
        <Product 
        id={7593757}
        image={product_5}
        text='Vestibulum aliquam ante ut ullamcorper tempor. '
        rating={4}
        tittle='lorem ipsum'
        price={675.67} 
        formattedPrice={formatPrice(675.67)}
        />
        </div>



        <div className='home-row'>
        <Product 
        id={756754875}
        image={product_6}
        text='Vestibulum aliquam ante ut ullamcorper tempor.'
        rating={6}
        tittle='bla bla' 
        price={6785.67}
        formattedPrice={formatPrice(6785)}
        />
        </div>




        <div className='home-row'>
        <Product 
        id='242343523'
        image={product_1}
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint  '
        rating = {6}
        tittle='am i right'
        price={467.78} 
        formattedPrice={formatPrice(467.78)}
        />
        <Product 
        id='345346454'
        image={product_2}
        text='laborum
        numquam blanditiis harum quisquam  iusto fuga praesentium
        optio, eaque rerum! '
        rating={3}
        tittle='laborum'
        price={19999.99}
        formattedPrice={formatPrice(19999.99)}
        />
        <Product 
        id={75873565}
        image={product_3}
        text='Nunc sapien nisl, dignissim at faucibus ut, fringilla at diam. 
        '
        rating={5}
        tittle='Ken Follet'
        price={35768.57}
        formattedPrice={formatPrice(35768.57)}
        />
        </div>
    </div>
  )
}

export default Home