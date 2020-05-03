import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Imagem from './pages/Imagem';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/imagem' component={Imagem}/>
      </Switch>
    </BrowserRouter>
  );
};
