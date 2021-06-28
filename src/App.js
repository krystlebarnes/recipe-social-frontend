import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { getCurrentUser } from './actions/currentUser.js';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Recipes from './components/Recipes.js';
// import NewRecipeFormWrapper from './components/NewRecipeFormWrapper.js';
import NewRecipe from './components/NewRecipe.js';
import RecipeDetails from './components/RecipeDetails.js';
import EditRecipeFormWrapper from './components/EditRecipeFormWrapper.js'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    const { loggedIn } = this.props
    return (
      <div className="App">
        { loggedIn ? <NavBar /> : null }
        <Switch>
          <Route exact path='/' render={(props)=> loggedIn ? <Recipes { ...props }/> : <Home { ...props } />} />
          <Route exact path='/login' component={ Login } />
          <Route exact path='/signup' component={ Signup } />
          <Route exact path='/recipes' component={ Recipes } />
          <Route exact path='/recipes/new' component={ NewRecipe } />
          <Route exact path='/recipes/:id' render={props => <RecipeDetails {...props} recipes={this.props.recipes}/>} />
          <Route exact path='/recipes/:id/edit' render={props => <EditRecipeFormWrapper {...props} recipes={this.props.recipes}/>} />
          {/* <Route exact path='/recipes/:id/edit' render={props => {
              const recipe = recipes.find(recipe => recipe.id === props.match.params.id)
              return <EditRecipeFormWrapper recipe={recipe} {...props}/>
            }
          }/> */}
          
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return ({
   loggedIn: !!state.currentUser,
   recipes: state.recipes
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
