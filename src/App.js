import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { getCurrentUser } from './actions/currentUser.js';
import NavBar from './components/NavBar.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
// import MainContainer from './components/MainContainer.js';
// import currentUser from './reducers/currentUser.js';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    return (
      <div className="App">
        <NavBar />
        <Route exact path='/login' component={ Login } />
        <Route exact path='/signup' component={ Signup } />

      </div>
    );
  }

}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
