export const deleteInstruction = (instructionId, history) => {
    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/instructions/${instructionId}`, {
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
                dispatch({type: 'DELETE_INSTRUCTION', instructionId})
                history.push(`/instructions`) // do i want this or recipes/recipeId?
            }
            })
            .catch(console.log)
    }
}