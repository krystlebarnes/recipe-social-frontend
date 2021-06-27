import React from 'react'
import { connect } from 'react-redux'
import Logout from './Logout.js'
import { NavLink } from 'react-router-dom'

const NavBar = ({ currentUser }) => {
  return (
    <div className="NavBar">
      <h3>recipe social</h3>
      <span className="NavLink"><NavLink exact activeClassName="active" to="/recipes" >FEED ME.</NavLink></span>
      <span className="NavLink"><NavLink exact activeClassName="active" to="/recipes/new" >Add Recipe.</NavLink></span>
      { currentUser ? <span className="Greeting">Hi {currentUser.attributes.name}!</span> : "" }
      <span className="Logout">{ currentUser ? <Logout/> : null }</span>
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar)