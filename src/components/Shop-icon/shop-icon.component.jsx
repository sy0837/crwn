import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopCart.svg'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import './shop-icon.styles.scss'
import { toggleCartHidden } from '../../redux/cart/cart.action'
import { selectCartItemsCount } from '../../redux/cart/cart.selector'

const CartIcon = ({ toggleCartHidden, itemCounter }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCounter}</span>
    </div>
)
const MapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
const mapStateToProps = createStructuredSelector({
    itemCounter: selectCartItemsCount
})
export default connect(mapStateToProps, MapDispatchToProps)(CartIcon)