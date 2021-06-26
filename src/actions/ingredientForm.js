export const updateIngredientForm = formData => {
    return {
        type: "UPDATE_INGREDIENT_FORM",
        formData
    }
}

export const resetIngredientForm = () => {
    return {
        type: "RESET_INGREDIENT_FORM"
    }
}

export const setFormData = ingredient => {
    const ingredientFormData = {
      quantity: ingredient.attributes.quantity,
      unit: ingredient.attributes.unit,
      item: ingredient.attributes.item,
      notes: ingredient.attributes.notes,
    }
    return {
      type: "SET_FORM_DATA",
      ingredientFormData
    }
  }