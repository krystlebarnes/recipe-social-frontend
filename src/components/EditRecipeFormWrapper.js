import React from 'react';
import { connect } from 'react-redux'
import RecipeForm from './RecipeForm.js'
import { editRecipe } from '../actions/editRecipe.js' 
import { deleteRecipe } from '../actions/deleteRecipe.js'
import { setFormData, resetRecipeForm } from '../actions/recipeForm.js'


class EditRecipeFormWrapper extends React.Component {

  // recipe = props.recipes.filter(recipe => recipe.id == props.match.params.id)[0]

  componentDidMount(){
    this.props.recipe && this.props.setFormData(this.props.recipe)
  }

  componentDidUpdate(prevProps) {
    this.props.recipe && !prevProps.recipe && this.props.setFormData(this.props.recipe)
  }

  componentWillUnmount() {
    this.props.resetRecipeForm()
  }

  handleSubmit = (formData) => {
    const { editRecipe, recipe, history } = this.props
    editRecipe({
      ...formData,
      recipeId: recipe.id
    }, history)
  }

  render() {
    const { history, deleteRecipe, recipe } = this.props
    const recipeId = recipe ? recipe.id : null
    return  <>
              <RecipeForm editMode handleSubmit={this.handleSubmit} />
              <br/>
              <button onClick={()=>deleteRecipe(recipeId, history)}>Delete Recipe</button>
            </>
  }
};

export default connect(null, { editRecipe, setFormData, resetRecipeForm, deleteRecipe })(EditRecipeFormWrapper);
