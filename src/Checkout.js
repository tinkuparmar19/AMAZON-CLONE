import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <div className='checkout_title'>
                    <h2>Your Shooping Basket</h2>
                </div>
            </div>

            <div className='checkout_right'>
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
