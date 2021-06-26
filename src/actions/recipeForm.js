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

export const setFormData = recipe => {
    const recipeFormData = {
      name: recipe.attributes.name,
      imageURL: recipe.attributes.image_url,
      description: recipe.attributes.description,
      prepTime: recipe.attributes.prep_time,
      cookTime: recipe.attributes.cook_time,
      servingSize: recipe.attributes.serving_size,
      calories: recipe.attributes.calories
    }
    return {
      type: "SET_FORM_DATA",
      recipeFormData
    }
  }