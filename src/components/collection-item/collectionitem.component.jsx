import React from 'react'
import { connect } from 'react-redux'
import './collection.styles.scss'
import CustomButton from '../CustomButton/customButton.component'
import { AddItem } from '../../redux/cart/cart.action'

const CollectionItem = ({ item, AddItem }) => {
    const { name, price, imageUrl } = item
    return (
        <div className='collection-item'>
            <div className='image'
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
                <CustomButton onClick={() => AddItem(item)} >Add To Cart</CustomButton>
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    AddItem: item => dispatch(AddItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)