import React from 'react'
import { withRouter } from 'react-router-dom'
import { MenuItemContainer, ContentContainer, ContentTitle, ContentSubtitle, BackgroundImageContainer } from './menu-item.styles'

const Menu = ({ title, imageUrl, size, history, linkUrl, match }) => {
    return (
        <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <BackgroundImageContainer className='background-image' imageUrl={imageUrl} />
            <ContentContainer>
                <ContentTitle>{title.toUpperCase()}</ContentTitle>
                <ContentSubtitle>SHOP</ContentSubtitle>
            </ContentContainer>
        </MenuItemContainer>
    )
}
export default withRouter(Menu)