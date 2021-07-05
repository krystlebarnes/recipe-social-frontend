export default (state = [], action) => {
    switch (action.type) {
        case "SET_RECIPES":
            return action.recipes
        case "ADD_RECIPE":
            return [...state, action.payload]
        case "EDIT_RECIPE":
            return state.map(recipe => recipe.id === action.payload.id ? action.payload : recipe)
        case "DELETE_RECIPE":
            return state.filter(recipe => recipe.id === action.recipeId ? false : true)
        default:
            return state
    }
}