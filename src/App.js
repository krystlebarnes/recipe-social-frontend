import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser.js';
import NavBar from './components/NavBar.js';
import MainContainer from './components/MainContainer.js';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    return (
      <div>
        <NavBar />
        <MainContainer />
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
