export default (state = [], action) => {
    switch (action.type) {
        case "SET_INGREDIENTS":
            return action.ingredients
        case "ADD_INGREDIENT":
            return state.concat(action.ingredient)
        case "EDIT_INGREDIENT":
            return state.map(ingredient => ingredient.id === action.ingredient.id ? action.ingredient : ingredient)
        case "DELETE_INGREDIENT":
            return state.filter(ingredient => ingredient.id === action.ingredientId ? false : true)
        default:
            return state
    }
}