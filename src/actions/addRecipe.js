import { resetRecipeForm } from './recipeForm.js'

export const addRecipe = (recipeData, history) => {
    return dispatch => {
        const newRecipe = {
            name: recipeData.name,
            image_url: recipeData.imageURL,
            description: recipeData.description,
            prep_time: recipeData.prepTime,
            cook_time: recipeData.cookTime,
            serving_size: recipeData.servingSize,
            calories: recipeData.calories,
            author_id: parseInt(recipeData.authorId)
        }

        return fetch("http://localhost:3000/api/v1/recipes", {
            credentials: 'include',
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newRecipe)
        })
        .then(r => r.json())
        .then(recipe => {
            if (recipe.error) {
                alert(recipe.error)
            } else {
                dispatch({type: 'ADD_RECIPE', payload: recipe.data})
                dispatch(resetRecipeForm())
                history.push(`/recipes/${recipe.data.id}`)
            }
        })
        .catch(console.log)
    }
}