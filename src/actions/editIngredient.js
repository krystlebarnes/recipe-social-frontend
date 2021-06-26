export const editIngredient = (ingredientData, history) => {
    return dispatch => {
        const updatedIngredient = {
            quantity: ingredientData.quantity,
            unit: ingredientData.unit,
            item: ingredientData.item,
            notes: ingredientdData.notes,
        }
        return fetch("http://localhost:3000/api/v1/ingredients/${ingredientData.ingredientId}", {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedIngredient)
        })
        .then(r => r.json())
        .then(r => {
            if (r.error) {
                alert(r.error)
            } else {
                const ingredient = r.data
                dispatch({type: 'EDIT_INGREDIENT', ingredient})
                history.push(`/ingredients/${r.data.id}`) //do I want this or recipes/r.data.recipeId?
            }
        })
        .catch(console.log)
    }
}