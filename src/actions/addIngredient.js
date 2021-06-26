export const addIngredient = (ingredientData, history) => {
    return dispatch => {
        const newIngredient = {
            quantity: ingredientData.quantity,
            unit: ingredientData.unit,
            item: ingredientData.item,
            notes: ingredientdData.notes,
            recipe_id: ingredientData.recipeId
        }
        return fetch("http://localhost:3000/api/v1/ingredients", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newIngredient)
        })
        .then(r => r.json())
        .then(r => {
            if (r.error) {
                alert(r.error)
            } else {
                const ingredient = r.data
                dispatch({type: 'ADD_INGREDIENT', ingredient})
                dispatch(resetIngredientForm())
                history.push(`/ingredients/${r.data.id}`) //I don't think I want to do this. push recipes/r.data.recipeId instead?
            }
        })
        .catch(console.log)
    }
}