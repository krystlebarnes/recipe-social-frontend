import React from 'react';
import { connect } from 'react-redux'
import IngredientForm from './IngredientForm.js'
import { editIngredient } from '../actions/editIngredient.js' 
import { deleteIngredient } from '../actions/deleteIngredient.js'
import { setFormData, resetIngredientForm } from '../actions/ingredientForm.js'


class EditIngredientFormWrapper extends React.Component {
  componentDidMount(){
    this.props.ingredient && this.props.setFormData(this.props.ingredient)
  }

  componentDidUpdate(prevProps) {
    this.props.ingredient && !prevProps.ingredient && this.props.setFormData(this.props.ingredient)
  }

  componentWillUnmount() {
    this.props.resetIngredientForm()
  }

  handleSubmit = (formData) => {
    const { editIngredient, ingredient, history } = this.props
    editIngredient({
      ...formData,
      ingredientId: ingredient.id
    }, history)
  }

  render() {
    const { history, deleteIngredient, ingredient } = this.props
    const ingredientId = ingredient ? ingredient.id : null
    return  <>
              <IngredientForm editMode handleSubmit={this.handleSubmit} />
              <button onClick={()=>deleteIngredient(ingredientId, history)}>Delete</button>
            </>
  }
};

export default connect(null, { editIngredient, setFormData, resetIngredientForm, deleteIngredient })(EditIngredientFormWrapper);
