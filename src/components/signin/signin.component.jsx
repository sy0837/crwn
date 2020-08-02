import React,{useState} from 'react'
import './signin.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../CustomButton/customButton.component'
import { connect } from 'react-redux'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action'

const Signin = ({emailSignInStart,googleSignInStart})=> {

    const [userCredentials, setCerdentials]=useState({email: '',password: ''})

    const { email, password } = userCredentials
    const handleSubmit = event => {
        event.preventDefault()
        emailSignInStart(email,password)
    }

   const handleChange = event => {
        const { name, value } = event.target

        setCerdentials({...userCredentials, [name]: value })
    }
    
        return (
            <div className='signin'>
                <h2 className='title'>I already have an account</h2>
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
                    <div className='buttons'>
                        <CustomButton type='submit'>Submit</CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSigin >Sigin with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    
}
const mapDispatchToProps= dispatch =>({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email,password) => dispatch(emailSignInStart({email,password}))
})
export default connect(null, mapDispatchToProps)(Signin)