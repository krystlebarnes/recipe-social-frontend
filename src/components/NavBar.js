import React from 'react'
import { connect } from 'react-redux'
import Logout from "./Logout.js"

const NavBar = ({ currentUser }) => {
  return (
    <div className="NavBar">
      { currentUser ? <span>Hi {currentUser.attributes.name}!</span> : "" }
      { currentUser ? <Logout/> : null }
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar)