export default (state = [], action) => {
    switch (action.type) {
        case "SET_RECIPES":
            return action.recipes
        case "ADD_RECIPE":
            return {...state, recipes: [...state.recipes, action.payload]}
        case "EDIT_RECIPE":
            return state.map(recipe => recipe.id === action.recipe.id ? action.recipe : recipe)
        case "DELETE_RECIPE":
            return state.filter(recipe => recipe.id === action.recipeId ? false : true)
        default:
            return state
    }
}