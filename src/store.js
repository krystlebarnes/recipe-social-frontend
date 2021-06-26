import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import currentUser from './reducers/currentUser.js';
import users from './reducers/users.js';
import loginForm from './reducers/loginForm.js';
import recipes from './reducers/recipes.js';
import signupForm from './reducers/signupForm.js';
import recipeForm from './reducers/recipeForm.js';
import ingredients from './reducers/ingredients.js';
import ingredientForm from './reducers/ingredientForm.js';
import instructions from './reducers/instructions.js';
import instructionForm from './reducers/instructionForm.js'


const reducer = combineReducers({
  users,
  currentUser,
  loginForm,
  recipes,
  signupForm,
  recipeForm,
  ingredients,
  ingredientForm,
  instructions,
  instructionForm
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store