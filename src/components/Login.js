import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'
import { login } from '../actions/currentUser.js'

const Login = ({ loginData, updateLoginForm, login }) => {

    const handleChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
          ...loginData,
          [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginData)
    }

    return (
        <div>
            <h2>Recipe Social</h2>
            <form onSubmit={handleSubmit}>
                <p><input placeholder="Username" value={loginData.username} name="username" type="text" onChange={handleChange} /></p>
                <p><input placeholder="Password" value={loginData.password} name="password" type="password" onChange={handleChange} /></p>
                <p><input type="submit" value="Log In"/></p>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loginData: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)