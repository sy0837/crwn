import React from 'react'
import { connect } from 'react-redux'

import './cart-dropdown.styles.scss'
import CustomButton from '../CustomButton/customButton.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems, selectCartHidden } from '../../redux/cart/cart.selector'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.action'

const CartDropdown = ({ cartItems, history,dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />

                    ))) : <span className='empty-message'>Your cart is empty</span>}
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }} >Go To CheckOut</CustomButton>

    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
    cartHidden : selectCartHidden(state)
}
)
export default withRouter(connect(mapStateToProps)(CartDropdown))
