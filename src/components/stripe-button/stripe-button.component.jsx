import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceStrip = price * 100
    const publishKey = 'pk_test_51GwSlmHYb6KjQW5EI3bm98KV524tjTENaPiKVUKyXvQGlpZoDg0fcRbhJVFsBd5V1Nw1eL1Q1GiVeHwK5QUwAObV00Can1MC0d'

    const token = token => {
        console.log(token);
        alert('Payment Successful')

    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='Crwn Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is $${price}`}
            amount={priceStrip}
            panelLabel='Pay Now'
            token={token}
            stripeKey={publishKey}
        />
    )
}
export default StripeCheckoutButton