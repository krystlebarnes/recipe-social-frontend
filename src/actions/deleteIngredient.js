export const deleteIngredient = (ingredientId, history) => {
    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/ingredients/${ingredientId}`, {
            credentials: "include",
            method: "DELETE",
            headers: {
            "Content-Type": "application/json"
            }
        })
            .then(r => r.json())
            .then(r => {
            if (r.error) {
                alert(r.error)
            } else {
                dispatch({type: 'DELETE_INGREDIENT', ingredientId})
                history.push(`/ingredients`) // do i want this or recipes/recipeId?
            }
            })
            .catch(console.log)
    }
}