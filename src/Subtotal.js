import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from './StateProvider'

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue()
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>0</strong>
                        </p>
                        <small className='subtotal_gift'>
                            <input type='checkbox' />
                            this order contain gift
                        </small>
                    </>
                    )}
                decimalScale={2}
                value={0}
                displayType={'text'}
                thousandSeperator={true}
                prefix={'$'}
            />
            <button>proceed to checkout</button>
        </div>
    )
}

export default Subtotal
