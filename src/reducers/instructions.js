export default (state = [], action) => {
    switch (action.type) {
        case "SET_INSTRUCTIONS":
            return action.instructions
        case "ADD_INSTRUCTION":
            return state.concat(action.instruction)
        case "EDIT_INSTRUCTION":
            return state.map(instruction => instruction.id === action.instruction.id ? action.instruction : instruction)
        case "DELETE_INSTRUCTION":
            return state.filter(instruction => instruction.id === action.instructionId ? false : true)
        default:
            return state
    }
}