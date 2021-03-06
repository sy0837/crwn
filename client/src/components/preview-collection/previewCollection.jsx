import React from 'react'
import CollectionItem from '../collection-item/collectionitem.component'

// import './previewCollection.scss'
import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './previewCollection.styles'

const CollectionPreview = ({ title, items, history, match, routeName }) => (

    <CollectionPreviewContainer>
        <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
            {title.toUpperCase()}
        </TitleContainer>
        <PreviewContainer>
            {items
                .filter((item, idx) => idx < 4)
                .map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </PreviewContainer>
    </CollectionPreviewContainer>

)
export default CollectionPreview