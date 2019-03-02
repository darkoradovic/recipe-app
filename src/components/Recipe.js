import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Loader from './Loader/Loader';

class Recipe extends Component {

  state = {
    activeRecipe: []
  }

  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const request = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=b36411205969559c4eeeae7fb7457e99&q=${title}`)
      //console.log(recipeName);

    const resault = await request.json();
      //console.log(resault.recipes[0]);
    this.setState({activeRecipe: resault.recipes[0]})

  }

  render(){
    const recipe = this.state.activeRecipe;
    return(
        <div className="container">

          { this.state.activeRecipe.length === 0 ?
            <Loader /> :
              <div className="row">
              <div className="active-recipe">
                <img className="rounded mx-auto d-block active-recipe__img" src={recipe.image_url} alt="..."/>
                <h3 className="active-recipe__title">{recipe.title}</h3>
                <h4 className="active-recipe__publisher">Publisher: <span>{recipe.publisher}</span></h4>
                <p className="active-recipe__website">Website: <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span></p>
                <button className="active-recipe__button"><Link to="/">Go Home</Link></button>
              </div>
            </div>
          }
        </div>
    )
  }
};

export default Recipe;
