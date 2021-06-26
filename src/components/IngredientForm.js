import React from 'react'
import { connect } from 'react-redux'
import { updateIngredientForm } from '../actions/ingredientForm.js'

const IngredientForm = ({ formData, updateIngredientForm, recipeId, handleSubmit, editMode }) => {

    const { quantity, unit, item, notes } = formData

    const handleChange = event => {
        const { name, value } = event.target
        updateIngredientForm(name, value)
    }


    return (
        <div>
            <form onSubmit={event => {
                event.preventDefault()
                handleSubmit(formData)
            }}>
                <input placeholder="qty" value={quantity} name="quantity" type="text" onChange={handleChange} />
                <input placeholder="unit" value={unit} name="unit" type="text" onChange={handleChange} />
                <textarea placeholder="item" value={item} name="item" onChange={handleChange} />
                <input placeholder="notes" value={notes} name="notes" type="text" onChange={handleChange} />minutes
                <p><input type="submit" value={editMode ? "Edit" : "Add" }/></p>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    const recipeId = state.recipe ? state.recipe.id : ""
    return {
        formData: state.ingredientForm,
        recipeId
    }
}

export default connect(mapStateToProps, { updateIngredientForm })(IngredientForm)