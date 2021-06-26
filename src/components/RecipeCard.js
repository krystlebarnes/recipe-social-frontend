import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({ recipe }) => {
    return (
        <Link to={`/recipes/${recipe.id}`}>
        <div className="RecipeCard">
            <img src={ recipe.attributes.image_url }></img>
            <h3>{ recipe.attributes.name }</h3>
            <span>{ recipe.attributes.description }</span>
            {/* Add ratings, likes, comments icon to expand comments, and link to view full recipe details */}
        </div>
        </Link>
    )
}

export default RecipeCard