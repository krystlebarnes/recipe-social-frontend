export const setInstructions = instructions => {
    return {
        type: "SET_INSTRUCTIONS",
        instructions
    }
}


export const getInstructions = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/instructions", { //need a nested route??
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
                dispatch(setInstructions(r.data))
            }
        })
        .catch(console.log)
    }
}