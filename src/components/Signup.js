import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from '../actions/signupForm.js'
import { signup } from '../actions/currentUser.js'

const Signup = ({ signupData, updateSignupForm, signup, history }) => {

    const handleChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
          ...signupData,
          [name]: value
        }
        updateSignupForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        signup(signupData, history)
    }

    return (
        <div>
            <h2>Recipe Social</h2>
            <form onSubmit={handleSubmit}>
                <p><input placeholder="Name" value={signupData.name} name="name" type="text" onChange={handleChange} /></p>
                <p><input placeholder="Username" value={signupData.username} name="username" type="text" onChange={handleChange} /></p>
                <p><input placeholder="Password" value={signupData.password} name="password" type="password" onChange={handleChange} /></p>
                <p><input type="submit" value="Sign Up"/></p>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        signupData: state.signupForm
    }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)