import React from 'react'
import './customButton.styles.scss'
import { CustomButtonStyles } from './customButton.styles'

const CustomButton = ({ children, ...props }) => (
    <CustomButtonStyles {...props}>
        {children}
    </CustomButtonStyles>
)
export default CustomButton