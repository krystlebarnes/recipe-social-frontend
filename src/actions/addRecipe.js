// import { resetRecipeForm } from './recipeForm.js'

export const addRecipe = (recipeData) => {
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
                dispatch({type: 'ADD_RECIPE', payload: recipe})
                // dispatch(resetRecipeForm())
                // history.push(`/recipes/${r.data.id}`)
            }
        })
        .catch(console.log)
    }
}