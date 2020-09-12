import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <img 
                className='home_image'
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=''
            />
            
            <div className='home_row'>
                <Product 
                    id='1'
                    title='The Lean Startup: How Constant Innovation Creates Radically Successfully Businesses Paperback'
                    price={19.99}
                    rating={3}
                    image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'    
                />
                <Product 
                    id='2'
                    title='Kenwood kMix Stand Mixer for Baking, Stylish kitchen Mixer with k-beater, Dough Hook with Whisk, 5 Litre Glass Bowl'
                    price={230.89}
                    rating={4}
                    image='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'
                />  
            </div>

            <div className='home_row'>
                <Product 
                    id='3'
                    title='FitBit Band'
                    price={550.90}
                    rating={4}
                    image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
                />
                <Product 
                    id='4'
                    title='Amazon Echo (3rd generation) Smart speaker with Alexa, Charcoal Fabric'
                    price={300.89}
                    rating={3}
                    image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
                />
                <Product 
                    id='5'
                    title='New Apple Ipad Pro, silver 4th Generation (12.4 inch, wi-fi, 128gb)'
                    price={999.99}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385_.jpg'
                />
            </div>

            <div className='home_row'>
                <Product 
                    id='6'
                    title='Samsung LED Monitor, Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD'
                    price={800}
                    rating={4}
                    image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
                />
            </div>
        </div>
    )
}
 
export default Home
