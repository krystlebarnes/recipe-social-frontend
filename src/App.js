import './App.css';
import React from 'react';
import Login from './components/Login.js'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'

class App extends React.Component {

  componendDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    return (
      <Login />
    );
  }

}

export default connect(null, { getCurrentUser })(App);
