import React from 'react'
import { connect } from 'react-redux'
import { AddItem } from '../../redux/cart/cart.action'
import { CollectionItemContainer, BackgroundImage, CollectionFooterContainer, NameContainer, PriceContainer, AddButton } from './collectionitem.styles'

const CollectionItem = ({ item, AddItem }) => {
    const { name, price, imageUrl } = item
    return (
        <CollectionItemContainer>
            <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
                <AddButton isCart onClick={() => AddItem(item)} >Add To Cart</AddButton>
            </CollectionFooterContainer>
        </CollectionItemContainer>
    )
}
const mapDispatchToProps = dispatch => ({
    AddItem: item => dispatch(AddItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)