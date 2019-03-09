import React, { Component } from 'react';
import '../App.css';

import Form from "./Form";
import Recipes from "./Recipes";

class Layout extends Component {

    state = {
        recipes: [],
    }

    getRecipe = async (e) => {
        const recipeName = e.target.elements.recipeName.value;
        e.preventDefault();
        const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=aefc1769e76c46041b599defa34f83c1&q=${recipeName}`)
        //console.log(recipeName);

        const data = await api_call.json();
        //console.log(data);

        this.setState({ recipes: data.recipes })

    }

    /* componentDidMount = () => {
        const json = localStorage.getItem("recipes");
        const recipes = JSON.parse(json);

        this.setState({ recipes: recipes })
    }

    componentDidUpdate = () => {
        const recipes = JSON.stringify(this.state.recipes);
        localStorage.setItem("recipes", recipes);
    } */

    render() {
        return (

            <React.Fragment>
                <Form getRecipe={this.getRecipe} />
                <Recipes recipes={this.state.recipes} />
            </React.Fragment>
        );
    }
}

export default Layout;