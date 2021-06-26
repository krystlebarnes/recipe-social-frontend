export const editRecipe = (recipeData, history) => {
    return dispatch => {
        const updatedRecipe = {
            name: recipeData.name,
            image_url: recipeData.imageURL,
            description: recipeData.description,
            prep_time: recipeData.prepTime,
            cook_time: recipeData.cookTime,
            serving_size: recipeData.servingSize,
            calories: recipeData.calories
        }
        return fetch("http://localhost:3000/api/v1/recipes/${recipeData.recipeId}", {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedRecipe)
        })
        .then(r => r.json())
        .then(r => {
            if (r.error) {
                alert(r.error)
            } else {
                const recipe = r.data
                dispatch({type: 'EDIT_RECIPE', recipe})
                history.push(`/recipes/${r.data.id}`)
            }
        })
        .catch(console.log)
    }
}