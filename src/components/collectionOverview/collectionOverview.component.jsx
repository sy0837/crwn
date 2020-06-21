import React from 'react'
import './collectionOverview.styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {  selectCollectionsForPreview } from '../../redux/shop/shop.selector'
import CollectionPreview from '../preview-collection/previewCollection'

const CollectionOverview = ({ collection }) => (
    <div className='collection-overview'>
        {collection.map(({ id, ...otherSectionProps }) => (
            <CollectionPreview key={id} {...otherSectionProps} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector(
    {
        collection: selectCollectionsForPreview
    }
)

export default connect(mapStateToProps)(CollectionOverview)