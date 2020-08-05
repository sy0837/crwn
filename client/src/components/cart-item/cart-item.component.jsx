import React from 'react'

// import './cart-item.styles.scss'
import { CartItemContainer, CartItemImage, ItemDetailsContainer } from './cart-item.styles'

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='img' />
        <ItemDetailsContainer>

            <span className='name'>{name}</span>
            <span className='price'>{quantity}x ${price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
)
export default CartItem