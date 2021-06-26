export const deleteRecipe = (recipeId, history) => {
    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/recipes/${recipeId}`, {
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
                dispatch({type: 'DELETE_RECIPE', recipeId})
                history.push(`/recipes`)
            }
            })
            .catch(console.log)
    }
}