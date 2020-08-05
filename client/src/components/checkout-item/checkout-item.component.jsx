import React from "react";

// import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import { clearItemFromCart, AddItem, RemoveItem } from "../../redux/cart/cart.action";
import { ImageContainer, TextContainer, CheckoutItemContainer, QuantityContainer, RemoveButtonContainer } from "./checkout-items.styles";


const CheckOutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="item" />
            </ImageContainer>
            <TextContainer>
                {name}
            </TextContainer>
            <QuantityContainer>

                <div className='arrow' onClick={() => removeItem(cartItem)} >&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </QuantityContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButtonContainer onClick={() => clearItem(cartItem)} >&#10005;
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    );
}
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(AddItem(item)),
    removeItem: item => dispatch(RemoveItem(item))
})
export default connect(null, mapDispatchToProps)(CheckOutItem);
