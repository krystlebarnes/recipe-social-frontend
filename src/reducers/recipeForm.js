const initialState = {
    name: "",
    imageURL: "",
    description: "",
    prepTime: "",
    cookTime: "",
    servingSize: "",
    calories: "",
    authorId: ""
}
  
export default (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_RECIPE_FORM":
            return action.formData
        case "RESET_RECIPE_FORM":
            return initialState
        default:
            return state
    }
  }