export const setRecipes = recipes => {
    return {
        type: "SET_RECIPES",
        recipes
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