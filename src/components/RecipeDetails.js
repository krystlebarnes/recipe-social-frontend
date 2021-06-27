import React from 'react'
import currentUser from '../reducers/currentUser'
import { Link } from 'react-router-dom'

const RecipeDetails = (props) => {

    console.log(props)

    let recipe = props.recipes.filter(recipe => recipe.id == props.match.params.id)[0]


    return (
        <div className="RecipeDetails">
            {/* do i need to make this Edit link visible only to the author? */}
            <p><Link to={`/recipes/${recipe.id}/edit`}>Edit recipe</Link></p>
            <h1>{ recipe.attributes.name }</h1>
            <img src={ recipe.attributes.image_url }></img>
            
            <p>{ recipe.attributes.description }</p>
            {recipe.attributes.prep_time ? <p><strong>Prep Time:</strong> { recipe.attributes.prep_time } minutes</p> : ""}
            {recipe.attributes.cook_time ? <p><strong>Cook Time:</strong> { recipe.attributes.cook_time } minutes</p> : ""}
            {recipe.attributes.serving_size ? <p><strong>Serving Size:</strong> { recipe.attributes.serving_size } servings</p> : ""}
            {recipe.attributes.calories ? <p><strong>Calories:</strong> { recipe.attributes.calories } calories</p> : ""}
            <h3>Ingredients:</h3>
            <ul>{recipe.attributes.ingredients.map(ingredient => 
                <li>{ ingredient.quantity } { ingredient.unit } { ingredient.item } <em>{ ingredient.notes }</em></li>
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