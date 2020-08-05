import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {  selectCollectionsForPreview } from '../../redux/shop/shop.selector'
import CollectionPreview from '../preview-collection/previewCollection'
import {CollectionsOverviewContainer} from './collectionOverview.styles'

const CollectionOverview = ({ collection }) => (
    <CollectionsOverviewContainer>
         {collection.map(({ id, ...otherSectionProps }) => (
            <CollectionPreview key={id} {...otherSectionProps} />
        ))}
    </CollectionsOverviewContainer>
)

const mapStateToProps = createStructuredSelector(
    {
        collection: selectCollectionsForPreview
    }
)

export default connect(mapStateToProps)(CollectionOverview)