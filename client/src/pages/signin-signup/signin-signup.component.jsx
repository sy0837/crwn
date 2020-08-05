import React from 'react'
import Signin from '../../components/signin/signin.component'
// import './signin-signup.styles.scss'
import Signup from '../../components/signup/signup.component'
import { SignInAndSignUpContainer } from './sigin-signup.styles'

const SigninSignout = () => (
    <SignInAndSignUpContainer>
        <Signin />
        <Signup />
    </SignInAndSignUpContainer>
)

export default SigninSignout