import React, { useState } from 'react'
// import './signup.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../CustomButton/customButton.component'
import { signUpStart } from '../../redux/user/user.action'
import { connect } from 'react-redux'
import { SignUpContainer, SignUpTitle } from './signup.styles'

const Signup = ({ signUpStart }) => {
    const [userCredentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const { displayName, email, password, confirmPassword } = userCredentials

    const handleChange = event => {
        const { name, value } = event.target

        setCredentials({ ...userCredentials, [name]: value })
    }

    const handleSubmit = async event => {
        event.preventDefault()
        if (password !== confirmPassword) {
            alert("Passwords dont match")
            return
        }
        signUpStart({ email, password, displayName })
    }

    return (
        <SignUpContainer>
            <SignUpTitle>Do not Have an Account</SignUpTitle>
            <span>Sign up to Crwn Shop</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </SignUpContainer>
    )

}
const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(Signup)