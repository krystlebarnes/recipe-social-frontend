import React from 'react'
import { connect } from 'react-redux'
import { updateInstructionForm } from '../actions/instructionForm.js'

const InstructionForm = ({ formData, updateInstructionForm, recipeId, handleSubmit, editMode }) => {

    const { step } = formData

    const handleChange = event => {
        const { name, value } = event.target
        updateInstructionForm(name, value)
    }


    return (
        <div>
            <form onSubmit={event => {
                event.preventDefault()
                handleSubmit(formData)
            }}>
                <textarea placeholder="Add a step." value={step} name="step" onChange={handleChange} />
                <p><input type="submit" value={editMode ? "Edit" : "Add" }/></p>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    const recipeId = state.recipe ? state.recipe.id : ""
    return {
        formData: state.instructionForm,
        recipeId
    }
}

export default connect(mapStateToProps, { updateInstructionForm })(InstructionForm)