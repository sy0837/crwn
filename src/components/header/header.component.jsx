import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import './header.styles.scss'
import CartIcon from '../Shop-icon/shop-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectCartHidden } from '../../redux/cart/cart.selector'
import {
    HeaderContainer,
    LogoLink,
    OptionContainer,
    OptionDiv,
    OptionLink
} from './header.styles'
import { signOutStart } from '../../redux/user/user.action'

const Header = ({ currentUser, hidden,signOutStart }) => (
    <HeaderContainer >
        <LogoLink to='/'>
            <Logo className='logo' />
        </LogoLink>
        <OptionContainer >
            <OptionLink to='/shop'>
                SHOP
    </OptionLink>
            <OptionLink to='/contact'>
                CONTACT
    </OptionLink>
            {
                currentUser ? <OptionDiv onClick={signOutStart} >SIGN OUT</OptionDiv> : <Link className='option' to='/signin'>SIGN UP</Link>
            }
            <CartIcon />
        </OptionContainer>
        {
            hidden ? null : <CartDropdown />
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector(
    {
        currentUser: selectCurrentUser,
        hidden: selectCartHidden
    }
)
const mapDispatchToProps = dispatch =>({
    signOutStart: () => dispatch(signOutStart())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)