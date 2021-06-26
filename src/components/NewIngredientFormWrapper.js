import React from 'react';
import IngredientForm from './IngredientForm.js'
import { addIngredient } from '../actions/addIngredient.js'
import { connect } from 'react-redux'

const NewIngredientFormWrapper = ({ history, addIngredient }) => {

  const handleSubmit = (formData, recipeId) => {
    addIngredient({
      ...formData,
      recipeId
    }, history)
  }
  return  <IngredientForm history={history} handleSubmit={handleSubmit} />
};

export default connect(null, { addIngredient })(NewIngredientFormWrapper);