import React from 'react'
import './signin.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../CustomButton/customButton.component'
import { signInWithGoogle, auth } from '../../firebase/firebase.util'

class Signin extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ''
        }
    }

    handleSubmit= event =>{
        event.preventDefault()
        const {email, password}=this.state

        try {
             auth.signInWithEmailAndPassword(email,password)
            this.setState( {email: '',password: ''})
        } catch (error) {
            console.log(error.message());
               
        }
        
    }

    handleChange= event =>{
        const {name , value}=event.target
        
        this.setState({[name]: value})
    }


    render() {
        return (
            <div className='signin'>
                <h2 className='title'>I already have an account</h2>
                <span>Signin with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                <FormInput
                     name='email'
                        type='email'
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                        label='Email'
                        // placeHolder='Email'
                />
                        <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        required
                        handleChange={this.handleChange}
                        label='Password'
                         />
                         <div className='buttons'>
                        <CustomButton type='submit'>Submit</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSigin >Sigin with Google</CustomButton>
                        </div>
                </form>
            </div>
        )
    }
}
export default Signin