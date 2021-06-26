export const editInstruction = (instructionData, history) => {
    return dispatch => {
        const updatedInstruction = {
            step: instructionData.step
        }
        return fetch("http://localhost:3000/api/v1/instructions/${instructionData.instructionId}", {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedInstruction)
        })
        .then(r => r.json())
        .then(r => {
            if (r.error) {
                alert(r.error)
            } else {
                const instruction = r.data
                dispatch({type: 'EDIT_INSTRUCTION', instruction})
                history.push(`/instructions/${r.data.id}`) //do I want this or recipes/r.data.recipeId?
            }
        })
        .catch(console.log)
    }
}