import React, { useState } from 'react'
// import './signin.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../CustomButton/customButton.component'
import { connect } from 'react-redux'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action'
import { SignInContainer, SignInTitle, ButtonsBarContainer, ErrorWarning } from './signin.styles'
import { createStructuredSelector } from 'reselect'
import { passwordError } from '../../redux/user/user.selector'

const Signin = ({ emailSignInStart, googleSignInStart, error }) => {

    const [userCredentials, setCerdentials] = useState({ email: '', password: '' })

    const { email, password } = userCredentials
    const handleSubmit = event => {
        event.preventDefault()
        emailSignInStart(email, password)
    }

    const handleChange = event => {
        const { name, value } = event.target

        setCerdentials({ ...userCredentials, [name]: value })
    }

    return (
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Signin with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    value={email}
                    required
                    handleChange={handleChange}
                    label='Email'
                // placeHolder='Email'
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    required
                    handleChange={handleChange}
                    label='Password'
                />
                <ButtonsBarContainer>
                    <CustomButton type='submit'>Submit</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSigin >Sigin with Google</CustomButton>
                </ButtonsBarContainer>
                {
                    error? <ErrorWarning>Password is wrong</ErrorWarning>: null
                }
            </form>
        </SignInContainer>
    )

}
const mapStateToProp= createStructuredSelector({
    error: passwordError
})

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})
export default connect(mapStateToProp, mapDispatchToProps)(Signin)