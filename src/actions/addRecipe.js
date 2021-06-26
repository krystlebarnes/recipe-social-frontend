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
            author_id: recipeData.authorId
        }
        return fetch("http://localhost:3000/api/v1/recipes", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRecipe)
        })
        .then(r => r.json())
        .then(r => {
            if (r.error) {
                alert(r.error)
            } else {
                const recipe = r.data
                dispatch({type: 'ADD_RECIPE', recipe})
                dispatch(resetRecipeForm())
                history.push(`/recipes/${r.data.id}`)
            }
        })
        .catch(console.log)
    }
}