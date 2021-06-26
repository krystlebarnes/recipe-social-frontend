const initialState = {
    step: "",
    recipeId: ""
}
  
export default (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_INSTRUCTION_FORM":
            return action.formData
        case "RESET_INSTRUCTION_FORM":
            return initialState
        default:
            return state
    }
  }