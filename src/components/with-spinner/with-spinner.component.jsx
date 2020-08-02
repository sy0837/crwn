import React from 'react'
import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles'

const WithSpinner= WrappedComponent =>{
    const Spinner = ({ isLoading, ...otherProps}) =>{
        return isLoading? (
            <SpinnerOverlay>
                <SpinnerContainer/>
                <p>Hang on loading... </p>
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps}/>
        )
    }
    return Spinner
}

export default WithSpinner