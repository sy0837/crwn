import React from 'react'
import './customButton.styles.scss'

const CustomButton =({ children, isGoogleSigin, inverted, ...otherProps})=>(
    <button className={`${inverted ? 'inverted': ''}${isGoogleSigin ? 'google-sign-in': ''} custom-button`} {...otherProps}>
    {children}
    </button>
)
export default CustomButton