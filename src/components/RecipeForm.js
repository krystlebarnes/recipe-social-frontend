import React from 'react'
import { connect } from 'react-redux'
import { updateRecipeForm } from '../actions/recipeForm.js'

const RecipeForm = ({ formData, updateRecipeForm, authorId, handleSubmit, editMode }) => {

    const { name, imageURL, description, prepTime, cookTime, servingSize, calories } = formData

    const handleChange = event => {
        const { name, value } = event.target
        updateRecipeForm(name, value)
    }


    return (
        <div className="RecipeForm">
            <h2>{ editMode ? "Edit Recipe" : "Add Recipe" }</h2>
            <form onSubmit={event => {
                event.preventDefault()
                handleSubmit(formData)
            }}>
                <p>
                <label>Recipe Name</label>
                <br></br>
                <input placeholder="Give your recipe a name." value={name} name="name" type="text" size="50" onChange={handleChange} />
                </p>
                <p>
                <label>Image URL</label>
                <br></br>
                <input placeholder="Include a photo by entering in the image's URL." value={imageURL} name="imageURL" type="text" size="100" onChange={handleChange} />
                </p>
                <p>
                <label>Description</label>
                <br></br>
                <textarea placeholder="Tell us a little bit about this recipe." value={description} name="description" cols="87" rows="5" onChange={handleChange} />
                </p>
                <p>
                <label>Prep Time</label>
                <br></br>
                <input placeholder="0" value={prepTime} name="prepTime" type="text" size="3" onChange={handleChange} /> minutes
                </p>
                <p>
                <label>Cook Time</label>
                <br></br>
                <input placeholder="0" value={cookTime} name="cookTime" type="text" size="3" onChange={handleChange} /> minutes
                </p>
                <p>
                <label># of Servings</label>
                <br></br>
                <input placeholder="0" value={servingSize} name="servingSize" type="text" size="3" onChange={handleChange} />
                </p>
                <p>
                <label># of Calories</label>
                <br></br>
                <input placeholder="0" value={calories} name="calories" type="text" size="4" onChange={handleChange} />
                </p>
                <p>Ingredients:</p>
                <p>Instructions:</p>
                <p><input type="submit" value="Save"/></p>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    const authorId = state.currentUser ? state.currentUser.id : ""
    return {
        formData: state.recipeForm,
        authorId
    }
}

export default connect(mapStateToProps, { updateRecipeForm })(RecipeForm)