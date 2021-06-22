import React from 'react'

const RecipeCard = ({ recipe }) => {
    return (
        <div class="RecipeCard">
            <img src={ recipe.attributes.image_url }></img>
            <h3>{ recipe.attributes.name }</h3>
            <span>{ recipe.attributes.description }</span>
            {/* Add ratings, likes, comments icon to expand comments, and link to view full recipe details */}
        </div>
    )
}

export default RecipeCard