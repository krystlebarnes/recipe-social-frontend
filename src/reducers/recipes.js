export default (state = [], action) => {
    switch (action.type) {
        case "SET_RECIPES":
            return action.recipes
        case "ADD_RECIPE":
            return [...state, action.payload]
        case "EDIT_RECIPE":
            let recipes = state.map(recipe => {
                if (recipe.id === action.payload.id) {
                    return action.payload
                } else {
                    return recipe
                }
            })
            return [...state, recipes]
        case "DELETE_RECIPE":
            return state.filter(recipe => recipe.id === action.recipeId ? false : true)
        default:
            return state
    }
}