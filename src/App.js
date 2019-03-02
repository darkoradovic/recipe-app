import React, { Component } from 'react';
import './App.css';

import Form from "./components/Form";
import Recipes from "./components/Recipes";

class App extends Component {

state = {
  recipes: []
}

//aefc1769e76c46041b599defa34f83c1

getRecipe = async (e) => {
  const recipeName = e.target.elements.recipeName.value;
  e.preventDefault();
  const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=b36411205969559c4eeeae7fb7457e99&q=${recipeName}`)
    //console.log(recipeName);

  const data = await api_call.json();
    //console.log(data);

  this.setState({recipes: data.recipes})
}

componentDidMount = () => {
  const json = localStorage.getItem("recipes");
  const recipes = JSON.parse(json);

  this.setState({recipes: recipes})
}

componentDidUpdate = () => {
  const recipes = JSON.stringify(this.state.recipes);
  localStorage.setItem("recipes", recipes);
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes} />
      </div>

    );
  }
}

export default App;
