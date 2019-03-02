import React from 'react';

const Form = (props) => {
  return(
    <React.Fragment>
    
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
    <form onSubmit={props.getRecipe} style={{marginBottom: '2rem'}}>
      <input className="form__input" type="text" name="recipeName"/>
      <button className="form__button">Search</button>
    </form>
    </React.Fragment>
  );
}

export default Form;
