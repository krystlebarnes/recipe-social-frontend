import React from 'react'
import { connect } from 'react-redux'
import RecipeCard from './RecipeCard.js'

const Recipes = props => {
  const recipeCards = props.recipes.length > 0 ? props.recipes.map(r => <RecipeCard recipe={r} key={r.attributes.id} />) : null

  return recipeCards
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(Recipes)