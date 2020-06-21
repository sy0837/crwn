import React from 'react'
import {Link } from 'react-router-dom'
import { ReactComponent as Logo} from '../../assets/crown.svg'
import {connect} from 'react-redux'
import {auth} from '../../firebase/firebase.util'
import {createStructuredSelector} from 'reselect'
import './header.styles.scss'
import CartIcon from '../Shop-icon/shop-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectCartHidden } from '../../redux/cart/cart.selector'

const Header = ({ currentUser,hidden})=> (
    <div className='header'>
    <Link to='/'>
    <Logo className='logo'/>
    </Link>
    <div className='options'>
    <Link className='option' to='/shop'>
    SHOP
    </Link>
    <Link className='option' to='/contact'>
    CONTACT
    </Link>
    {
        currentUser?<div className='option' onClick={() =>auth.signOut()} >SIGN OUT</div>:<Link className='option' to='/signin'>SIGN UP</Link>
    }
    <CartIcon/>
    </div>
    {
        hidden? null: <CartDropdown/>
    }
    </div>
)

const mapStateToProps= createStructuredSelector(
    {
        currentUser: selectCurrentUser,
        hidden: selectCartHidden
    }
)
export default connect(mapStateToProps)(Header)