import React from 'react'
import { connect } from 'react-redux'

// import './cart-dropdown.styles.scss'
import CustomButton from '../CustomButton/customButton.component'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems, selectCartHidden } from '../../redux/cart/cart.selector'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer } from './cart-dropdown.styles'

const CartDropdown = ({ cartItems, history,dispatch }) => (
    <CartDropdownContainer>
    <CartItemsContainer>
       
            {
                cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />

                    ))) : <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer> }
      
        </CartItemsContainer>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }} >Go To CheckOut</CustomButton>
    </CartDropdownContainer>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
    cartHidden : selectCartHidden(state)
}
)
export default withRouter(connect(mapStateToProps)(CartDropdown))
