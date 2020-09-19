import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue()
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <div className='checkout_title'>
                    <h3>Hello, {user?.email}</h3>
                    <h2>Your Shooping Basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}
                            title={item.title}
                        />
                    ))}
                </div>
            </div>

            <div className='checkout_right'>
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
