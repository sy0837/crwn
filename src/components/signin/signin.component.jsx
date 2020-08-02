import React from 'react'
import './signin.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../CustomButton/customButton.component'
import { connect } from 'react-redux'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.action'

class Signin extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()
        const {emailSignInStart}= this.props
        const { email, password } = this.state
        emailSignInStart(email,password)


    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({ [name]: value })
    }


    render() {
        const {googleSignInStart}= this.props
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
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSigin >Sigin with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps= dispatch =>({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email,password) => dispatch(emailSignInStart({email,password}))
})
export default connect(null, mapDispatchToProps)(Signin)