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
        <form onSubmit={handleSubmit}>
            <input placeholder="Username" value={loginData.username} name="username" type="text" onChange={handleChange} />
            <input placeholder="Password" value={loginData.password} name="password" type="password" onChange={handleChange} />
            <input type="submit" value="Log In"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginData: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)