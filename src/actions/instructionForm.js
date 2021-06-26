export const updateInstructionForm = formData => {
    return {
        type: "UPDATE_INSTRUCTION_FORM",
        formData
    }
}

export const resetInstructionForm = () => {
    return {
        type: "RESET_INSTRUCTION_FORM"
    }
}

export const setFormData = instruction => {
    const instructionFormData = {
      step: instruction.attributes.step
    }
    return {
      type: "SET_FORM_DATA",
      instructionFormData
    }
  }