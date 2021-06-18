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
            <label>Username: </label>
            <input value={loginData.username} name="username" type="text" onChange={handleChange} />
            <br></br>
            <label>Password: </label>
            <input value={loginData.password} name="password" type="password" onChange={handleChange} />
            <br></br>
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