import React from 'react'
import { connect } from 'react-redux'
import { editRecipe } from '../actions/editRecipe.js' 
// import { deleteRecipe } from '../actions/deleteRecipe.js'
// import { setFormData, resetRecipeForm } from '../actions/recipeForm.js'

class EditRecipe extends React.Component {

    constructor(props) {
        super(props);

        let recipe = this.props.recipes.filter(recipe => recipe.id == this.props.match.params.id)[0]
   
        this.state = {
            name: recipe.attributes.name,
            imageURL: recipe.attributes.image_url,
            description: recipe.attributes.description,
            prepTime: recipe.attributes.prep_time,
            cookTime: recipe.attributes.cook_time,
            servingSize: recipe.attributes.serving_size,
            calories: recipe.attributes.calories,
            id: recipe.id 
        };
    }

    // componentDidMount(){
    //     this.props.recipe && this.props.setFormData(this.props.recipe)
    // }
    
    // componentDidUpdate(prevProps) {
    //     this.props.recipe && !prevProps.recipe && this.props.setFormData(this.props.recipe)
    // }

    // componentWillUnmount() {
    // this.props.resetRecipeForm()
    // }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.editRecipe(this.state, this.props.history)
    }

    render() {
        console.log(this.state.id)
        return (
            <div className="RecipeForm">
                <h2>Edit Recipe</h2>
                <form onSubmit={this.handleSubmit}>
                    <p>
                    <label>Recipe Name</label>
                    <br></br>
                    <input value={this.state.name} name="name" type="text" size="50" onChange={this.handleChange} />
                    </p>
                    <p>
                    <label>Image URL</label>
                    <br></br>
                    <input value={this.state.imageURL} name="imageURL" type="text" size="100" onChange={this.handleChange} />
                    </p>
                    <p>
                    <label>Description</label>
                    <br></br>
                    <textarea placeholder="Tell us a little bit about this recipe." value={this.state.description} name="description" cols="87" rows="5" onChange={this.handleChange} />
                    </p>
                    <p>
                    <label>Prep Time</label>
                    <br></br>
                    <input placeholder="0" value={this.state.prepTime} name="prepTime" type="text" size="3" onChange={this.handleChange} /> minutes
                    </p>
                    <p>
                    <label>Cook Time</label>
                    <br></br>
                    <input placeholder="0" value={this.state.cookTime} name="cookTime" type="text" size="3" onChange={this.handleChange} /> minutes
                    </p>
                    <p>
                    <label># of Servings</label>
                    <br></br>
                    <input placeholder="0" value={this.state.servingSize} name="servingSize" type="text" size="3" onChange={this.handleChange} />
                    </p>
                    <p>
                    <label># of Calories</label>
                    <br></br>
                    <input placeholder="0" value={this.state.calories} name="calories" type="text" size="4" onChange={this.handleChange} />
                    </p>
                    <p>Ingredients:</p>
                    <p>Instructions:</p>
                    <p><input type="submit" value="Save"/></p>
                </form>
            </div>
        )
    }
}

export default connect(null, { editRecipe })(EditRecipe)