import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { getCurrentUser } from './actions/currentUser.js';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import MainContainer from './components/MainContainer.js';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    const { loggedIn } = this.props
    return (
      <div className="App">
        <Switch>
        { loggedIn ? <NavBar /> : null }
        <Route exact path='/' render={(props)=> loggedIn ? <MainContainer { ...props }/> : <Home { ...props } />} />
        <Route exact path='/login' component={ Login } />
        <Route exact path='/signup' component={ Signup } />
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return ({
   loggedIn: !!state.currentUser
  })
}

export default connect(mapStateToProps, { getCurrentUser })(App);
