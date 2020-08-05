import React from 'react'
// import { ReactComponent  } from '../../assets/shopCart.svg'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// import './shop-icon.styles.scss'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import { selectCartItemsCount } from '../../redux/cart/cart.selector'
import { CartContainer, ShoppingIcon, ItemCountContainer } from './shop-icon.styles'

const CartIcon = ({ toggleCartHidden, itemCounter }) => (
    <CartContainer onClick={toggleCartHidden}>
        <ShoppingIcon />
        <ItemCountContainer>{itemCounter}</ItemCountContainer>
    </CartContainer>
)
const MapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
const mapStateToProps = createStructuredSelector({
    itemCounter: selectCartItemsCount
})
export default connect(mapStateToProps, MapDispatchToProps)(CartIcon)