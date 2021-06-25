import { resetRecipeForm } from './recipeForm.js'

export const setRecipes = recipes => {
    return {
        type: "SET_RECIPES",
        recipes
    }
}

export const addRecipe = recipe => {
    return {
        type: "ADD_RECIPE",
        recipe
    }
}


export const getRecipes = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/recipes", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(r => r.json())
        .then(r => {
            if (r.error) {
                alert(r.error)
            } else {
                dispatch(setRecipes(r.data))
            }
        })
        .catch(console.log)
    }
}

export const createRecipe = (recipeData, history) => {
    return dispatch => {
        const newRecipe = {
            name: recipeData.name,
            image_url: recipeData.imageURL,
            description: recipeData.description,
            prep_time: recipedData.prepTime,
            cook_time: recipeData.cookTime,
            serving_size: recipeData.servingSize,
            calories: recipeData.calories,
            author_id: recipeData.userId
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
                dispatch(addRecipe(r.data))
                dispatch(resetRecipeForm())
                history.push(`/recipes/${r.data.id}`)
            }
        })
        .catch(console.log)
    }
}

