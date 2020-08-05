import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
// import './directory.styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { directorySelectorItem } from '../../redux/directory/directory.selector'
import { DirectoryMenuContainer } from './directory.styles'

const Directory = ({ sections }) => (
    <DirectoryMenuContainer>
        {sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
        ))}
    </DirectoryMenuContainer>
)
const mapStateToProps = createStructuredSelector({
    sections: directorySelectorItem
})
export default connect(mapStateToProps)(Directory)