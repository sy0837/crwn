import React from 'react'
import Signin from '../../components/signin/signin.component' 
import './signin-signup.styles.scss'
import Signup from '../../components/signup/signup.component'

const SigninSignout = () =>(
    <div className='sign-in-and-sign-up'>
    <Signin/>
    <Signup/>
    </div>
)

export default SigninSignout