import React from 'react'
import './signup.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../CustomButton/customButton.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.util'

class Signup extends React.Component {
    constructor() {
        super()
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }

    }
    handleChange = event => {
        const { name, value } = event.target

        this.setState({ [name]: value })
    }
    handleSubmit = async event => {
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state

        if (password !== confirmPassword) {
            alert("Passwords dont match")
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            createUserProfileDocument(user, { displayName })
        } catch (error) {
            console.log(error.message());


        }

    }
    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>Do not Have an Account</h2>
                <span>Sign up to Crwn Shop</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default Signup