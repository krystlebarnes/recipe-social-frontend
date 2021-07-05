export const editRecipe = (recipeData, history) => {
    return dispatch => {
        const updatedRecipe = {
            name: recipeData.name,
            image_url: recipeData.imageURL,
            description: recipeData.description,
            prep_time: recipeData.prepTime,
            cook_time: recipeData.cookTime,
            serving_size: recipeData.servingSize,
            calories: recipeData.calories,
            id: parseInt(recipeData.id)
        }
        
        return fetch(`http://localhost:3000/api/v1/recipes/${recipeData.id}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedRecipe)
        })
        .then(r => r.json())
        .then(recipe => {
            if (recipe.error) {
                alert(recipe.error)
            } else {
                dispatch({type: 'EDIT_RECIPE', payload: recipe.data})
                history.push(`/recipes/${recipe.data.id}`)
            }
        })
        .catch(console.log)
    }
}