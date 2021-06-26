import React from 'react';
import RecipeForm from './RecipeForm'
import { addRecipe } from '../actions/addRecipe.js'
import { connect } from 'react-redux'

const NewRecipeFormWrapper = ({ history, addRecipe }) => {

  const handleSubmit = (formData, authorId) => {
    addRecipe({
      ...formData,
      authorId
    }, history)
  }
  return  <RecipeForm history={history} handleSubmit={handleSubmit} />
};

export default connect(null, { addRecipe })(NewRecipeFormWrapper);