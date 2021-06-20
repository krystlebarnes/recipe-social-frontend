import './App.css';
import React from 'react';
import { connect } from 'react-redux'
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import { getCurrentUser } from './actions/currentUser.js'
import NavBar from './components/NavBar.js'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    return (
      <NavBar />
    );
  }

}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
