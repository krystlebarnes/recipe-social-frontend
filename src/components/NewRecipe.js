import React from 'react'
import { connect } from 'react-redux'
import { addRecipe } from '../actions/addRecipe.js'

class NewRecipe extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            imageURL: '',
            description: '',
            prepTime: '',
            cookTime: '',
            servingSize: '',
            calories: '',
            authorId: props.currentUser.id
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addRecipe(this.state)
        // this.setState({
        //     name: '',
        //     imageURL: '',
        //     description: '',
        //     prepTime: '',
        //     cookTime: '',
        //     servingSize: '',
        //     calories: '',
        //     authorId: ''
        // })
    }

    render() {
        return (
        <div className="RecipeForm">
            <h2>Add Recipe</h2>
            <form onSubmit={this.handleSubmit}>
                <p>
                <label>Recipe Name</label>
                <br></br>
                <input placeholder="Give your recipe a name." value={this.state.name} name="name" type="text" size="50" onChange={this.handleChange} />
                </p>
                <p>
                <label>Image URL</label>
                <br></br>
                <input placeholder="Include a photo by entering in the image's URL." value={this.state.imageURL} name="imageURL" type="text" size="100" onChange={this.handleChange} />
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

const mapStateToProps = state => {
    const authorId = state.currentUser ? state.currentUser.id : ""
    return {
     authorId
    //  recipes: state.recipes
    }
  }

export default connect(mapStateToProps, { addRecipe })(NewRecipe)