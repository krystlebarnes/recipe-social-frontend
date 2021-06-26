import React from 'react'
import currentUser from '../reducers/currentUser'

const RecipeDetails = ({ recipe }) => {
    return (
        <div class="RecipeDetails">
            { currentUser.id === recipe.attributes.author_id ? <Link to={`/recipes/${recipe.id}/edit`}>Edit this recipe.</Link> : ""}
            <h2>{ recipe.attributes.name }</h2>
            <img src={ recipe.attributes.image_url }></img>
            <p>{ recipe.attributes.description }</p>
            {recipe.attributes.prep_time ? <p>Prep Time: { recipe.attributes.prep_time } minutes</p> : ""}
            {recipe.attributes.cook_time ? <p>Cook Time: { recipe.attributes.cook_time } minutes</p> : ""}
            {recipe.attributes.serving_size ? <p>Serving Size: { recipe.attributes.serving_size } servings</p> : ""}
            {recipe.attributes.calories ? <p>Calories: { recipe.attributes.calories } calories</p> : ""}
            <h3>Ingredients:</h3>
            <ul>{recipe.attributes.ingredients.map(ingredient => 
                <li>{ ingredient.quantity } { ingredient.unit } { ingredient.item }, <em>{ ingredient.notes }</em></li>
                )}
            </ul>
            <h3>Instructions:</h3>
            <ol>{recipe.attributes.instructions.map(instruction => 
                <li>{ instruction.step }</li>
                )}
            </ol>

            {/* Add ratings, likes, comments */}
        </div>
    )
}

export default RecipeDetails