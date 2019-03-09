import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Loader from './Loader/Loader';

class Recipe extends Component {

  state = {
    activeRecipe: []
  }

  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const request = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=aefc1769e76c46041b599defa34f83c1&q=${title}`)
    //console.log(recipeName);

    const resault = await request.json();
    //console.log(resault.recipes[0]);
    this.setState({ activeRecipe: resault.recipes[0] })

  }

  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div className="container">

        {this.state.activeRecipe.length === 0 ?
          <Loader /> :
          
            <div className="active-recipe">
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3">
                <img className="rounded mx-auto d-block active-recipe__img" src={recipe.image_url} alt="..." />
              </div>
              
              
              <div className="col-10 mx-auto col-md-6 my-3">
                <h3 className="active-recipe__title">{recipe.title}</h3>
                <h4 className="active-recipe__publisher">Publisher: <span>{recipe.publisher}</span></h4>
                <p className="active-recipe__website">Website: <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span></p>
                <button className="active-recipe__button"><Link to="/">Go Home</Link></button>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
};

export default Recipe;
