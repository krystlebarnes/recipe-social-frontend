import { resetInstructionForm } from './instructionForm.js'

export const addInstruction = (instructionData, history) => {
    return dispatch => {
        const newInstruction = {
            step: instructionData.step,
            recipe_id: instructionData.recipeId
        }
        return fetch("http://localhost:3000/api/v1/instructions", { //this probably needs to be a nested route under it's recipe
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newInstruction)
        })
        .then(r => r.json())
        .then(r => {
            if (r.error) {
                alert(r.error)
            } else {
                const instruction = r.data
                dispatch({type: 'ADD_INSTRUCTION', instruction})
                dispatch(resetInstructionForm())
                history.push(`/instructions/${r.data.id}`) //I don't think I want to do this. push recipes/r.data.recipeId instead?
            }
        })
        .catch(console.log)
    }
}