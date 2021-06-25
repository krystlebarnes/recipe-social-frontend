export const updateRecipeForm = formData => {
    return {
        type: "UPDATE_RECIPE_FORM",
        formData
    }
}

export const resetRecipeForm = () => {
    return {
        type: "RESET_RECIPE_FORM"
    }
}