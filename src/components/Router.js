import React from 'react';
import { Switch, Route} from 'react-router-dom';

import App from '../App';
import Recipe from './Recipe';

const Router = () => {
  return(
  
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/recipe/:id" component={Recipe} />
    </Switch>
  
  )
}

export default Router;
